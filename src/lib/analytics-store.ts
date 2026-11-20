import { sql } from "@vercel/postgres";
import { promises as fs } from "node:fs";
import path from "node:path";

export type AnalyticsData = {
  total: number;
  byPath: Record<string, number>;
  lastVisit: string;
  visits: { path: string; timestamp: string }[];
};

const FILE_PATH = path.join(process.cwd(), "analytics-data.json");

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS page_views (
      id SERIAL PRIMARY KEY,
      path TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

async function recordToFile(pathname: string) {
  let data: AnalyticsData = { total: 0, byPath: {}, lastVisit: "", visits: [] };
  try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
    data = JSON.parse(raw) as AnalyticsData;
  } catch {
    // file may not exist yet
  }
  const now = new Date().toISOString();
  data.total += 1;
  data.byPath[pathname] = (data.byPath[pathname] || 0) + 1;
  data.lastVisit = now;
  if (!data.visits) data.visits = [];
  data.visits.unshift({ path: pathname, timestamp: now });
  data.visits = data.visits.slice(0, 100);
  await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2), "utf8");
}

async function readFromFile(): Promise<AnalyticsData> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf8");
    const data = JSON.parse(raw) as AnalyticsData;
    if (!data.visits) data.visits = [];
    return data;
  } catch {
    return { total: 0, byPath: {}, lastVisit: "", visits: [] };
  }
}

export async function recordView(pathname: string): Promise<void> {
  if (process.env.POSTGRES_URL) {
    await ensureTable();
    await sql`INSERT INTO page_views (path) VALUES (${pathname})`;
    return;
  }
  await recordToFile(pathname);
}

export async function getAnalytics(): Promise<AnalyticsData> {
  if (process.env.POSTGRES_URL) {
    await ensureTable();
    const totalRes = await sql`SELECT COUNT(*)::int AS count FROM page_views`;
    const lastRes = await sql`SELECT created_at FROM page_views ORDER BY created_at DESC LIMIT 1`;
    const byPathRes = await sql`SELECT path, COUNT(*)::int AS count FROM page_views GROUP BY path`;
    const visitsRes = await sql`SELECT path, created_at FROM page_views ORDER BY created_at DESC LIMIT 50`;
    const byPath: Record<string, number> = {};
    for (const row of byPathRes.rows) {
      byPath[row.path as string] = row.count as number;
    }
    return {
      total: (totalRes.rows[0]?.count as number) || 0,
      byPath,
      lastVisit: lastRes.rows[0]?.created_at
        ? new Date(lastRes.rows[0].created_at as string).toISOString()
        : "",
      visits: visitsRes.rows.map((row) => ({
        path: row.path as string,
        timestamp: new Date(row.created_at as string).toISOString(),
      })),
    };
  }
  return readFromFile();
}
