import { NextResponse } from "next/server";

export function GET() {
  const denoVersion = Deno.version;

  return NextResponse.json({
    deno: denoVersion.deno,
    v8: denoVersion.v8,
    typescript: denoVersion.typescript,
  });
}
