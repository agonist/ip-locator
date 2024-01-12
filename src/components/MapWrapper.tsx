import dynamic from "next/dynamic";

export const DynamicTestMap = dynamic(() => import("./Map"), {
  ssr: false,
});

export default DynamicTestMap;