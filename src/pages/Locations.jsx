import { useSelector } from "react-redux";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Location from "../components/Location";
import { useEffect, useState } from "react";
import useGeoLocation from "../hooks/useGeoLocation";
import { getPosition } from "../services/geoLocation";

function Locations() {
  const [position, setPosition] = useState(null);
  const data = useSelector((store) => store.locations);
  const { isLoading } = useGeoLocation(position);

  function requestPosition() {
    getPosition(setPosition);
  }

  return (
    <section className="py-5">
      <div className="max-w-7xl lg:max-w-5xl md:max-w-3xl m-auto">
        <h1 className="font-semibold text-2xl mb-5 px-5 text-center md:text-start">We Are At</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-[300px] bg-gray-600 overflow-hidden top-0 left-5 relative">
            <button
              onClick={requestPosition}
              disabled={isLoading}
              type="button"
              className="absolute z-[999] text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 top-2.5 right-2.5 disabled:bg-purple-400"
            >
              {!isLoading ? "Current Position" : "Searching..."}
            </button>
            <MapContainer
              style={{ height: "300px" }}
              center={[31.6257, -7.9891]}
              zoom={13}
              scrollWheelZoom={true}
              zoomControl={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
              />

              {data.map((item) =>
                item.addresses.map((ele, index) => (
                  <Marker
                    key={index}
                    position={[ele.latitude, ele.longitude]}
                    icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                  >
                    <Popup>
                      {ele.name} <br /> {ele.price}
                    </Popup>
                  </Marker>
                ))
              )}
              <ChangeView position={position} />
            </MapContainer>
          </div>
          <div className="space-y-5 px-5">
            {data.map((item) => item.addresses.map((address, index) => <Location key={index} location={address} />))}
          </div>
        </section>
      </div>
    </section>
  );
}

function ChangeView({ position }) {
  const map = useMap();
  if (position) map.flyTo([position.lat, position.lng], 13);

  return null;
}

export default Locations;
