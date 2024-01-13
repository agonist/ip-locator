export interface IpifyResult {
  ip: string;
  location: IpifyLocation;
  isp: string;
}

export interface IpifyLocation {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}
