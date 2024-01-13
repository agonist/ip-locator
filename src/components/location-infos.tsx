import React from "react";
import { DisplayBox } from "./display-box";
import { IpifyResult } from "@/types/ipify";
import { Separator } from "./separator";
import { cn } from "@/lib/utils";

type Props = {
  searchData: IpifyResult;
  className?: string;
};

export const LocationInfos: React.FC<Props> = ({ searchData, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-white p-8 rounded-xl md:space-x-8 space-y-8 md:space-y-0 items-center",
        className
      )}
    >
      <DisplayBox
        label="IP ADDRESS"
        value={searchData.ip}
        className="md:w-1/4 items-center md:items-start"
      />
      <Separator orientation="vertical" className="hidden md:block" />
      <DisplayBox
        label="LOCATION"
        value={searchData.location.city}
        className="md:w-1/4 items-center md:items-start"
      />
      <Separator orientation="vertical" className="hidden md:block" />
      <DisplayBox
        label="TIMEZONE"
        value={searchData.location.timezone}
        className="md:w-1/4 items-center md:items-start"
      />
      <Separator orientation="vertical" className="hidden md:block" />
      <DisplayBox
        label="ISP"
        value={searchData.isp}
        className="md:w-1/4 items-center md:items-start"
      />
    </div>
  );
};

const Infos = () => {};
