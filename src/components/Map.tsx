"use client";

import "leaflet/dist/leaflet.css";
import Leaflet, { LatLng } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import { IpifyLocation } from "@/lib/ipify";

type Props = {
  location: IpifyLocation;
};

export const LocationMarker: React.FC<Props> = ({
  location = {
    lat: 0.0,
    lng: 0.0,
    city: "",
    country: "",
    geonameId: 0,
    postalCode: "",
    region: "",
    timezone: "",
  },
}) => {
  const [position, setPosition] = useState(
    new LatLng(location.lat, location.lng)
  );

  useEffect(() => {
    console.log(position);
    map.flyTo(position, map.getZoom());
  }, [position]);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker
      position={position}
      icon={L.icon({
        iconUrl: `${window.location.origin}/img/icon-location.svg`,
        iconSize: [46, 56],
      })}
    >
      <Popup>You are here</Popup>
    </Marker>
  );
};

export const Map: React.FC<Props> = ({
  location = {
    lat: 0.0,
    lng: 0.0,
    city: "",
    country: "",
    geonameId: 0,
    postalCode: "",
    region: "",
    timezone: "",
  },
}) => {
  useEffect(() => {
    (async function init() {
      // @ts-ignore
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      className="z-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker location={location} />
      {/* <Marker
        position={[location.lat, location.lng]}
        icon={L.icon({
          iconUrl: `${window.location.origin}/img/icon-location.svg`,
          iconSize: [46, 56],
        })}
      >
        <Popup>
          {location.city}, {location.country}
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default Map;
