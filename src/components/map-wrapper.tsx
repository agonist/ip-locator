import dynamic from "next/dynamic";

export const DynamicTestMap = dynamic(() => import("./map"), {
  ssr: false,
});

export default DynamicTestMap;
