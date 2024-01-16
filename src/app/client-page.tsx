"use client";

import DynamicTestMap from "@/components/map-wrapper";
import { LocationInfos } from "@/components/location-infos";
import { SearchForm } from "@/components/search-form";
import { searchQuery } from "@/lib/ipify";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  initialIp: string;
};

export const ClientPage: React.FC<Props> = ({ initialIp }) => {
  const [current, setCurrent] = useState("185.39.141.151");

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData", current],

    queryFn: () =>
      searchQuery(current)
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
        }),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className="flex flex-col h-screen ">
      <div className="relative w-full h-[50%] md:h-[30%]">
        <div className="">
          <Image
            src={"/img/pattern-bg-desktop.png"}
            // width={1440}
            // height={280}
            alt="bg"
            fill
            className="hidden sm:block object-cover object-center"
          />
          <Image
            src={"/img/pattern-bg-mobile.png"}
            fill
            alt="bg"
            className="block sm:hidden bg-cover object-cover object-center"
          />
        </div>

        <div className="absolute top-0 w-full items-center flex flex-col space-y-4 h-full my-8">
          <h1 className="text-3xl md:text-4xl font-medium">
            IP Address Tracker
          </h1>
          <div className="flex px-4 w-full justify-center">
            <SearchForm
              className="w-full md:w-96"
              onSearch={(value) => {
                setCurrent(value);
              }}
            />
          </div>
        </div>
        <div className="absolute bottom-0 translate-y-1/2 w-full flex flex-col items-center z-50 space-y-5 md:space-y-0">
          <div className="px-4 w-full flex justify-center">
            <LocationInfos
              searchData={data}
              className="md:w-2/3 w-full"
              loading={isPending}
            />
          </div>
        </div>
      </div>
      <div className="h-[50%] md:h-[70%]">
        {data && <DynamicTestMap location={data.location} />}
      </div>
    </main>
  );
};
