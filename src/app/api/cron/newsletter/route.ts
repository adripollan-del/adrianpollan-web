import { NextResponse } from "next/server";

// Protected cron endpoint — call daily from Railway's cron service or cron-job.org.
// Set CRON_SECRET in environment variables and pass it as ?secret=<value>.
//
// The email sequence is scheduled directly via Resend's scheduledAt on subscription,
// so this endpoint currently just acknowledges the call. It's available for future
// maintenance tasks (e.g. retry bounces, sync analytics).

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");

  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ ok: true, timestamp: new Date().toISOString() });
}
