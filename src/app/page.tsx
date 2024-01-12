import { headers } from "next/headers";
import { Suspense } from "react";

function IP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

async function getData() {
  const ip = await fetch("http://localhost:3000/api/location");
  const res = await ip.json();
  return res;
}

export default async function Home() {
  const ip = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p></p>
      <Suspense fallback={null}>
        <IP />
      </Suspense>
    </main>
  );
}
