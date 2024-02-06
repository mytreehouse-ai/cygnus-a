import { NextRequest, NextResponse } from "next/server";

export const GET = async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
};
