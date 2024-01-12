import { headers } from "next/headers";
import { Suspense } from "react";
import { appBaseUrl } from "./lib/utils";
import { IpifyResult } from "./lib/ipify";

function IP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

async function getData() {
  const res = await fetch(`${appBaseUrl()}/api/location`);
  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as IpifyResult;

  return data;
}

export default async function Home() {
  const ip = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {ip && <p>{ip.ip}</p>}

      <Suspense fallback={null}>
        <IP />
      </Suspense>
    </main>
  );
}
