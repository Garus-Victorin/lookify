"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowLeft, BarChart3, Eye, Clock, Globe, List } from "lucide-react";
import { PROJECTS } from "@/data";

type Visit = { path: string; timestamp: string };
type AnalyticsData = {
  total: number;
  byPath: Record<string, number>;
  lastVisit: string;
  visits: Visit[];
};

const DEFAULT: AnalyticsData = { total: 0, byPath: {}, lastVisit: "", visits: [] };

let cache: AnalyticsData = DEFAULT;
const listeners = new Set<() => void>();

async function refresh() {
  try {
    const res = await fetch("/api/analytics");
    if (res.ok) {
      cache = (await res.json()) as AnalyticsData;
      if (!cache.visits) cache.visits = [];
      listeners.forEach((l) => l());
    }
  } catch {
    // ignore
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  refresh();
  const handler = () => refresh();
  window.addEventListener("lookify-analytics-update", handler);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("lookify-analytics-update", handler);
  };
}

function getSnapshot() {
  return cache;
}

function formatDate(value: string) {
  if (!value) return "—";
  const d = new Date(value);
  return d.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export default function AdminPage() {
  const data = useSyncExternalStore(subscribe, getSnapshot, () => DEFAULT);

  const topPages = Object.entries(data.byPath).sort((a, b) => b[1] - a[1]);

  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white mb-8">
          <ArrowLeft size={16} /> Retour au portfolio
        </Link>

        <div className="flex items-center gap-3 mb-10">
          <BarChart3 className="text-[#FF6B00]" size={30} />
          <div>
            <h1 className="text-3xl font-bold">Analytics — Admin</h1>
            <p className="text-sm text-[#A1A1AA]">Détails des visites du portfolio</p>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="glass rounded-2xl border border-white/5 p-6">
            <div className="flex items-center gap-2 text-[#A1A1AA] text-sm mb-2">
              <Eye size={16} /> Visites totales
            </div>
            <div className="text-4xl font-bold text-[#FF6B00]">{data.total}</div>
          </div>
          <div className="glass rounded-2xl border border-white/5 p-6">
            <div className="flex items-center gap-2 text-[#A1A1AA] text-sm mb-2">
              <Globe size={16} /> Pages uniques
            </div>
            <div className="text-4xl font-bold text-[#FF6B00]">{Object.keys(data.byPath).length}</div>
          </div>
          <div className="glass rounded-2xl border border-white/5 p-6">
            <div className="flex items-center gap-2 text-[#A1A1AA] text-sm mb-2">
              <BarChart3 size={16} /> Projets
            </div>
            <div className="text-4xl font-bold text-[#FF6B00]">{PROJECTS.length}</div>
          </div>
          <div className="glass rounded-2xl border border-white/5 p-6">
            <div className="flex items-center gap-2 text-[#A1A1AA] text-sm mb-2">
              <Clock size={16} /> Dernière visite
            </div>
            <div className="text-sm text-white">{formatDate(data.lastVisit)}</div>
          </div>
        </div>

        {/* Top pages */}
        <div className="glass rounded-2xl border border-white/5 p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">Pages les plus visitées</h2>
          {topPages.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[#A1A1AA] border-b border-white/5">
                    <th className="py-2 pr-4">Page</th>
                    <th className="py-2 text-right">Visites</th>
                    <th className="py-2 text-right">Part</th>
                  </tr>
                </thead>
                <tbody>
                  {topPages.map(([path, count]) => (
                    <tr key={path} className="border-b border-white/5 last:border-0">
                      <td className="py-2 pr-4 text-white">{path}</td>
                      <td className="py-2 text-right font-bold text-[#FF6B00]">{count}</td>
                      <td className="py-2 text-right text-[#A1A1AA]">
                        {data.total > 0 ? Math.round((count / data.total) * 100) : 0}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-[#A1A1AA]">Aucune donnée pour le moment.</p>
          )}
        </div>

        {/* Recent visits */}
        <div className="glass rounded-2xl border border-white/5 p-6">
          <div className="flex items-center gap-2 mb-4">
            <List size={18} className="text-[#FF6B00]" />
            <h2 className="text-lg font-bold">Dernières visites</h2>
            <span className="text-xs text-[#A1A1AA] ml-auto">
              {data.visits.length} enregistrée{data.visits.length > 1 ? "s" : ""}
            </span>
          </div>
          {data.visits.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[#A1A1AA] border-b border-white/5">
                    <th className="py-2 pr-4">#</th>
                    <th className="py-2 pr-4">Page</th>
                    <th className="py-2">Date & heure</th>
                  </tr>
                </thead>
                <tbody>
                  {data.visits.map((visit, index) => (
                    <tr key={`${visit.timestamp}-${index}`} className="border-b border-white/5 last:border-0">
                      <td className="py-2 pr-4 text-[#A1A1AA]">{index + 1}</td>
                      <td className="py-2 pr-4 text-white">{visit.path}</td>
                      <td className="py-2 text-[#A1A1AA]">{formatDate(visit.timestamp)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-[#A1A1AA]">Aucune visite enregistrée.</p>
          )}
        </div>
      </div>
    </main>
  );
}
