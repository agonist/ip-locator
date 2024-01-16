import { ClientPage } from "./client-page";
import { clientIP } from "@/lib/ip";

export default async function Home() {
  return <ClientPage initialIp={clientIP()} />;
}
