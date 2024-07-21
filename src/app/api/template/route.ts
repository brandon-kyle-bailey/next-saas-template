import { ratelimit } from "@/lib/api/ratelimit";
import { NextRequest, NextResponse } from "next/server";
// TODO:... Introduce upstash for rate limiting
export async function GET(req: NextRequest) {
  const ip = req.ip ?? "127.0.0.1";
  // const { success, pending, limit, reset, remaining } = await ratelimit.limit(
  //   ip
  // );
  //
  // if (!success) {
  //   console.log("limit", limit);
  //   console.log("reset", reset);
  //   console.log("remaining", remaining);
  //
  //   return NextResponse.json("Rate Limited", { status: 429 });
  // }
  // console.log("remaining", remaining);

  return NextResponse.json("Success", { status: 200 });
}
