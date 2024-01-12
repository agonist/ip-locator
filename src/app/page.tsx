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
  const ip = await fetch(`${appBaseUrl()}/api/location`);
  const res = (await ip.json()) as IpifyResult;

  return res;
}

export default async function Home() {
  const ip = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{ip.ip}</p>
      <Suspense fallback={null}>
        <IP />
      </Suspense>
    </main>
  );
}
