"use client";

import "leaflet/dist/leaflet.css";
import Leaflet, { LatLng } from "leaflet";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

type Props = {
  lat: number;
  lng: number;
};

export const LocationMarker: React.FC<Props> = ({ lat, lng }) => {
  const [position, _] = useState(new LatLng(lat, lng));

  const map = useMapEvents({});

  useEffect(() => {
    map.flyTo(position, map.getZoom());
  }, [position]);

  return position === null ? null : (
    <Marker
      position={position}
      icon={L.icon({
        iconUrl: `${window.location.origin}/img/icon-location.svg`,
        iconSize: [46, 56],
      })}
    ></Marker>
  );
};

export const Map: React.FC<Props> = ({ lat, lng }) => {
  // some trick cause react-leaflet has typescript issue.
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
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      className="z-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker lat={lat} lng={lng} />
    </MapContainer>
  );
};

export default Map;
