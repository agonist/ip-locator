import { headers } from "next/headers";
import { isIPv4, isIPv6 } from "./ipify";

export function clientIP() {
  // fallback mostly for localhost
  const FALLBACK_IP_ADDRESS = "185.39.141.151";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor && (isIPv4(forwardedFor) || isIPv6(forwardedFor))) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}
