import { headers } from "next/headers";
import { Suspense, useEffect, useState } from "react";
import { appBaseUrl } from "./lib/utils";
import { IpifyResult, searchQuery } from "./lib/ipify";

function IP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

async function getData(ip: string) {
  return searchQuery(ip)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Network response was not ok (${res.status} ${res.statusText})`
        );
      }
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return undefined;
    });
}

export default async function Home() {
  const data = await getData(IP());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data && <p>{data.ip}</p>}

      <Suspense fallback={null}>
        <IP />
      </Suspense>
    </main>
  );
}
