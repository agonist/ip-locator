import { headers } from "next/headers";
import { searchQuery } from "../lib/ipify";
import Image from "next/image";
import DynamicTestMap from "@/components/MapWrapper";
import { DisplayBox } from "@/components/display-box";
import { LocationInfos } from "@/components/location-infos";
import { IpifyResult } from "@/types/ipify";

function IP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

async function getData(ip: string) {
  // const r: IpifyResult = {
  //   ip: "100.123.113.122",
  //   isp: "FOO DDDD",
  //   location: {
  //     city: "Paris",
  //     country: "France",
  //     region: "Alsace",
  //     lat: 0,
  //     lng: 0,
  //     postalCode: "",
  //     timezone: "+1",
  //     geonameId: 0,
  //   },
  // };
  // return r;

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
    <main className="flex min-h-screen flex-col ">
      <div className="flex flex-col bg-red-400 ">
        <div className="relative w-full bg-gray-300 ">
          <Image
            src={"/img/pattern-bg-desktop.png"}
            width={1440}
            height={280}
            alt="bg"
            className="hidden sm:block"
          />
          <Image
            src={"/img/pattern-bg-mobile.png"}
            width={375}
            height={300}
            alt="bg"
            className="block sm:hidden"
          />
          <div className="absolute bottom-0 translate-y-1/2 w-full flex justify-center z-50">
            <LocationInfos searchData={data} className="md:w-2/3 w-11/12" />
            {/* <div className=" h-32 w-32 bg-blue-300 "></div> */}
          </div>
        </div>
        <div>
          <DynamicTestMap />
        </div>
      </div>
    </main>
  );
}
