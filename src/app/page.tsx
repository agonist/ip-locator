import { IpLocatorPage } from "@/components/features/ip-locator/ip-locator-page";
import { clientIP } from "@/lib/ip";

export default async function Home() {
  return <IpLocatorPage initialIp={clientIP()} />;
}
