import { NextRequest, NextResponse } from "next/server";
import { recordView, getAnalytics } from "@/lib/analytics-store";

export async function POST(req: NextRequest) {
  try {
    const { path } = (await req.json()) as { path?: string };
    const pathname = path || "/";
    if (pathname.startsWith("/admin")) {
      return NextResponse.json({ ok: true, skipped: true });
    }
    await recordView(pathname);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    if (process.env.POSTGRES_URL) {
      const { sql } = await import("@vercel/postgres");
      await sql`DELETE FROM page_views`;
    } else {
      const { promises: fs } = await import("node:fs");
      const path = await import("node:path");
      const filePath = path.join(process.cwd(), "analytics-data.json");
      await fs.writeFile(filePath, JSON.stringify({ total: 0, byPath: {}, lastVisit: "", visits: [] }, null, 2), "utf8");
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
export async function GET() {
  try {
    const data = await getAnalytics();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ total: 0, byPath: {}, lastVisit: "" }, { status: 500 });
  }
}
