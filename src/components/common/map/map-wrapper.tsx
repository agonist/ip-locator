import dynamic from "next/dynamic";

// Load the map dynamically to avoid SSR and potential heavy loading

export const DynamicTestMap = dynamic(() => import("./map"), {
  ssr: false,
});

export default DynamicTestMap;
