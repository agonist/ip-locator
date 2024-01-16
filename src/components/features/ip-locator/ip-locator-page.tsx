"use client";

import DynamicTestMap from "@/components/common/map/map-wrapper";
import { LocationInfos } from "@/components/features/ip-locator/location-infos";
import { SearchForm } from "@/components/features/ip-locator/search-form";
import { appBaseUrl } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { HeaderBg } from "./header-bg";
import { fetchLocation } from "@/lib/api/location";

type Props = {
  initialIp: string;
};

export const IpLocatorPage: React.FC<Props> = ({ initialIp }) => {
  const [current, setCurrent] = useState(initialIp);

  const { isPending, isError, data, refetch } = useQuery({
    queryKey: ["repoData", current],
    queryFn: () => fetchLocation(current),
  });

  return (
    <main className="flex flex-col h-screen ">
      <div className="relative w-full h-[45%] md:h-[35%]">
        <HeaderBg />
        <div className="absolute top-0 w-full items-center flex flex-col space-y-4 h-full mt-8 md:my-16">
          <h1 className="text-2xl md:text-3xl font-medium">
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
        <div className="absolute bottom-0 translate-y-1/2 w-full z-50">
          <div className="px-4 w-full flex justify-center">
            <LocationInfos
              searchData={data}
              className="lg:w-2/3 w-full"
              loading={isPending}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[55%] md:h-[65%]">
        {isError && (
          <div className="flex flex-col items-center">
            <p>Something went wrong</p>
            <button
              className="underline"
              onClick={async () => {
                await refetch();
              }}
            >
              Retry
            </button>
          </div>
        )}
        {data && (
          <DynamicTestMap lat={data.location.lat} lng={data.location.lng} />
        )}
      </div>
    </main>
  );
};
