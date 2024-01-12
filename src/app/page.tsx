import { headers } from "next/headers";
import { Suspense, useEffect, useState } from "react";
import { appBaseUrl } from "./lib/utils";
import { IpifyResult, searchQuery } from "./lib/ipify";
import Image from "next/image";
import { Map } from "@/components/Map";
import DynamicTestMap from "@/components/MapWrapper";

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
    <main className="flex min-h-screen flex-col">
      <div>
        <Image
          src={"/img/pattern-bg-desktop.png"}
          width={1440}
          height={280}
          alt="bg"
        />
        <div>
          <DynamicTestMap />
        </div>
      </div>
    </main>
  );
}
