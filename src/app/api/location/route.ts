import { searchQuery } from "@/lib/ipify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const search = searchParams.get("search") ?? "";

  return searchQuery(search)
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
      return NextResponse.json({ error: err }, { status: 401 });
    });
}
