import { searchQuery } from "@/app/lib/ipify";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  console.log("-----------");
  console.log(req.headers.get("x-real-ip"));
  try {
    const res = await searchQuery(ip);

    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
