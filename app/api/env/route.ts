import { NextResponse } from "next/server";
import process from "node:process";

export function GET() {
  return NextResponse.json({
    env: process.env.BACKEND_PUBLIC_API_URL,
  });
}
