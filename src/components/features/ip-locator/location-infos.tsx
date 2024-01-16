import React from "react";

import { cn } from "@/lib/utils";
import { IpifyResult } from "@/lib/ipify";
import { TextLabel } from "@/components/common/text-label";
import { Separator } from "@/components/ui/separator";

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
      <TextLabel
        label="IP ADDRESS"
        value={searchData ? searchData.ip : "-"}
        className="md:w-1/4 items-center md:items-star"
        loading={loading}
      />
      <Separator orientation="vertical" className="hidden md:block" />
      <TextLabel
        label="LOCATION"
        value={searchData ? searchData.location.city : "-"}
        className="md:w-1/4 items-center md:items-start"
        loading={loading}
      />
      <Separator orientation="vertical" className="hidden md:block" />
      <TextLabel
        label="TIMEZONE"
        value={searchData ? `UTC ${searchData.location.timezone}` : "-"}
        className="md:w-1/4 items-center md:items-start"
        loading={loading}
      />
      <Separator orientation="vertical" className="hidden md:block" />
      <TextLabel
        label="ISP"
        value={searchData ? searchData.isp : "-"}
        className="md:w-1/4 items-center md:items-start"
        loading={loading}
      />
    </div>
  );
};
