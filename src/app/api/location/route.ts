import { searchQuery } from "@/app/lib/ipify";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];

  searchQuery(ip)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Network response was not ok (${res.status} ${res.statusText})`
        );
      }
      return res.json();
    })
    .then((res) => {
      return NextResponse.json(res);
    })
    .catch((err) => {
      return NextResponse.json({ error: err });
    });
}
