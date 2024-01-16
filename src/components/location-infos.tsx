import React from "react";
import { DisplayBox } from "./display-box";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { IpifyResult } from "@/lib/ipify";

type Props = {
  searchData?: IpifyResult;
  loading: boolean;
  className?: string;
};

export const LocationInfos: React.FC<Props> = ({
  searchData,
  loading,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-white p-8 rounded-xl md:space-x-8 space-y-8 md:space-y-0",
        className
      )}
    >
      <DisplayBox
        label="IP ADDRESS"
        value={searchData ? searchData.ip : "-"}
        className="md:w-1/4 items-center md:items-start"
        loading={loading}
      />
      <Separator orientation="vertical" className="hidden md:block" />
      <DisplayBox
        label="LOCATION"
        value={searchData ? searchData.location.city : "-"}
        className="md:w-1/4 items-center md:items-start"
        loading={loading}
      />
      <Separator orientation="vertical" className="hidden md:block" />
      <DisplayBox
        label="TIMEZONE"
        value={searchData ? searchData.location.timezone : "-"}
        className="md:w-1/4 items-center md:items-start"
        loading={loading}
      />
      <Separator orientation="vertical" className="hidden md:block" />
      <DisplayBox
        label="ISP"
        value={searchData ? searchData.isp : "-"}
        className="md:w-1/4 items-center md:items-start"
        loading={loading}
      />
    </div>
  );
};

const Infos = () => {};
