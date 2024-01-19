import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { getPosition } from "../services/geoLocation";
import { useSelector } from "react-redux";
import useGeoLocation from "../hooks/useGeoLocation";

import style from "./Hero.module.css";

import { getDistance } from "../helpers/getDistance";

function Hero() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const locations = useSelector((store) => store.locations);
  const [position, setPosition] = useState(null);
  const { address, isLoading, setAddress } = useGeoLocation(position);

  function requestPosition() {
    getPosition(setPosition);
  }

  function requestNearService() {
    setError(false);

    if (!address) {
      setError(true);
      return;
    }

    const nearestService = locations
      .map((item) => item.addresses)
      .map((address) => address)
      .reduce((curr, next) => [...curr, ...next], [])
      .sort((a, b) => {
        const distanceA = getDistance(a.latitude, a.longitude, position.lat, position.lng);
        const distanceB = getDistance(b.latitude, b.longitude, position.lat, position.lng);

        return distanceA - distanceB;
      });

    navigate(`/locations/${nearestService.at(0).name.replaceAll(" ", "-").toLowerCase()}`);
  }

  return (
    <section className={`h-[60dvh] flex bg-blue-100 justify-center items-center `}>
      <div className="text-center space-y-8 px-5">
        <h1 className="text-2xl font-semibold text-stone-950">Worlds Leading Short-term Storage Provider</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div class="mb-5 flex items-cente justify-center relative">
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              id="base-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-72 md:w-full p-2.5 rounded-none disabled:bg-slate-300 "
              placeholder="Get your location"
              disabled={isLoading}
            />
            {error && (
              <small className="text-sm text-red-700 font-semibold absolute left-0 bottom-[-24px]">
                * Address is required!
              </small>
            )}

            <button
              onClick={requestPosition}
              type="button"
              class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-none text-center disabled:bg-blue-300"
              disabled={isLoading}
            >
              🚀
            </button>
          </div>
        </form>

        <div className="space-x-2 font-semibold">
          <button
            onClick={requestNearService}
            className="rounded-lg px-5 py-2 bg-stone-200 border-blue-500 border-4 text-blue-500"
          >
            Near me
          </button>
          <Link to="/locations" className=" rounded-lg px-5 py-2 bg-blue-500 border-4 border-blue-500 text-blue-100">
            Find Locations
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
