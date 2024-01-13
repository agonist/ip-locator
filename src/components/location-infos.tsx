import React from "react";
import { DisplayBox } from "./display-box";
import { IpifyResult } from "@/types/ipify";

type Props = {
  searchData: IpifyResult;
};

export const LocationInfos: React.FC<Props> = ({ searchData }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <DisplayBox label="IP ADDRESS" value={searchData.ip} />
      <DisplayBox label="LOCATION" value={searchData.location.city} />
      <DisplayBox label="TIMEZONE" value={searchData.location.timezone} />
      <DisplayBox label="ISP" value={searchData.isp} />
    </div>
  );
};

const Infos = () => {};
