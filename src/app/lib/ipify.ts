export const IPIFY_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_KEY}`;

const IP_V4_REGEX =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const IP_V6_REGEX = /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:)$/;

const DOMAIN_REGEX =
  /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

export async function searchQuery(input: string) {
  console.log(input);
  if (isIPv4(input) || isIPv6(input)) {
    const url = `${IPIFY_URL}&ipAddress=${input}`;
    return await fetch(url);
  } else if (isDomain(input)) {
    const url = `${IPIFY_URL}&domain=${input}`;
    return await fetch(url);
  } else {
    throw Error("Invalid search parameters. Must be valid IP or Domain.");
  }
}

function isIPv4(input: string): boolean {
  return IP_V4_REGEX.test(input);
}

function isIPv6(input: string): boolean {
  return IP_V6_REGEX.test(input);
}

function isDomain(input: string) {
  return DOMAIN_REGEX.test(input);
}


