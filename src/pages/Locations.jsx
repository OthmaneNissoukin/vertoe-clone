import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Location from "../components/Location";
import { useSelector } from "react-redux";

function Locations() {
  const data = useSelector((store) => store.locations);
  return (
    <section className="py-5">
      <div className="max-w-7xl lg:max-w-5xl md:max-w-3xl m-auto">
        <h1 className="font-semibold text-2xl mb-5 px-5 text-center md:text-start">We Are At</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-[300px] bg-gray-600 overflow-hidden top-0 left-5 sticky">
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
                item.addresses.map((ele) => (
                  <Marker
                    position={[ele.latitude, ele.longitude]}
                    icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                  >
                    <Popup>
                      {ele.name} <br /> {ele.price}
                    </Popup>
                  </Marker>
                ))
              )}
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

export default Locations;
