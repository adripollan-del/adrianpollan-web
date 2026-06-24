import { NextResponse } from "next/server";

let callCount = 0;

function guardTestRoutes() {
  if (process.env.ENABLE_TEST_ROUTES !== "true") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return null;
}

export async function GET() {
  const guard = guardTestRoutes();
  if (guard) return guard;
  return NextResponse.json({ callCount });
}

export async function POST() {
  const guard = guardTestRoutes();
  if (guard) return guard;
  callCount++;
  console.log(`[crm-ok-stub] received call #${callCount}`);
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const guard = guardTestRoutes();
  if (guard) return guard;
  callCount = 0;
  return NextResponse.json({ ok: true, reset: true });
}
