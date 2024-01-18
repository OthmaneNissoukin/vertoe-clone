import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Location from "../components/Location";

const data = [
  {
    city: "Marrakech",
    addresses: [
      {
        name: "Marrakech Central Square",
        street: "Jemaa el-Fnaa",
        zipcode: "40000",
        latitude: 31.6257,
        longitude: -7.9891,
        price: "$4.75",
        status: true,
        rate: 4,
      },
      {
        name: "Marrakech Souk Market",
        street: "Souk Semmarine",
        zipcode: "40030",
        latitude: 31.629,
        longitude: -7.9825,
        price: "$4.75",
        status: true,
        rate: 4,
      },
      {
        name: "Marrakech Royal Palace",
        street: "Bab Agnaou",
        zipcode: "40100",
        latitude: 31.6232,
        longitude: -7.9834,
        price: "$4.75",
        status: true,
        rate: 4,
      },
      {
        name: "Marrakech Gardens",
        street: "Jardin Majorelle",
        zipcode: "40110",
        latitude: 31.6338,
        longitude: -7.9882,
        price: "$5.25",
        status: false,
        rate: 4,
      },
    ],
  },
  {
    city: "Agadir",
    addresses: [
      {
        name: "Agadir Beachfront",
        street: "Avenue Mohammed V",
        zipcode: "80000",
        latitude: 30.421,
        longitude: -9.598,
        price: "$4.75",
        status: true,
        rate: 4,
      },
      {
        name: "Agadir Marina",
        street: "Marina Agadir",
        zipcode: "80010",
        latitude: 30.4225,
        longitude: -9.5985,
        status: true,
        rate: 4,
      },
      {
        name: "Agadir Kasbah",
        street: "Kasbah Agadir Oufella",
        zipcode: "80020",
        latitude: 30.427,
        longitude: -9.596,
        price: "$4.75",
        status: true,
        rate: 4,
      },
      {
        name: "Agadir Golf Club",
        street: "Golf du Soleil",
        zipcode: "80030",
        latitude: 30.4105,
        longitude: -9.5802,
        price: "$7.50",
        status: true,
        rate: 4,
      },
    ],
  },
];

function Locations() {
  return (
    <section className="py-5">
      <div className="max-w-7xl lg:max-w-5xl md:max-w-3xl m-auto">
        <h1 className="font-semibold text-2xl mb-5">We Are At</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-[300px] bg-gray-600 overflow-hidden top-5 left-5 sticky">
            <MapContainer
              style={{ height: "300px" }}
              center={[31.6257, -7.9891]}
              zoom={13}
              scrollWheelZoom={true}
              zoomControl={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {data.map((item) =>
                item.addresses.map((ele) => (
                  <Marker position={[ele.latitude, ele.longitude]}>
                    <Popup>
                      {ele.name} <br /> {ele.price}
                    </Popup>
                  </Marker>
                ))
              )}

              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
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
