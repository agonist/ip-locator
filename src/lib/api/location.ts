import { appBaseUrl } from "../utils";

export function fetchLocation(search: string) {
  return fetch(`${appBaseUrl()}/api/location?search=${search}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Network response was not ok (${res.status} ${res.statusText})`
        );
      }
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
