import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function getDirection(lat, lng) {
  window.open("https://maps.google.com?q=" + lat + "," + lng);
}

function Address() {
  const { id } = useParams();
  const locations = useSelector((store) => store.locations);
  const navigate = useNavigate();

  const selectedAddress = locations
    .map((item) => item.addresses)
    .reduce((curr, next) => [...curr, ...next], [])
    .find((target) => target.name.replaceAll(" ", "-").toLowerCase() === id);

  if (!selectedAddress)
    return (
      <section className="p-5">
        <div className="m-auto lg:max-w-5xl max-w-7xl md:max-w-3xl min-h-96 space-y-7">
          <h1 className="font-semibold text-2xl">
            The requested Luggage Storage
            <span className="uppercase font-bold text-red-600"> "{id.replaceAll("-", " ")}"</span> doesn't exist!
          </h1>
          <button
            onClick={() => navigate(-1)}
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            GO BACK
          </button>
        </div>
      </section>
    );

  return (
    <section className="space-y-5">
      <div>
        <img src="../assets/staticmap.png" className="w-screen h-40 object-cover" />
      </div>

      <section className="md:flex md:flex-row-reverse px-5 lg:max-w-5xl max-w-7xl md:max-w-3xl m-auto space-y-2 justify-between">
        <div className="gap-2 shrink-0 flex flex-col sm:flex-row md:items-start text-center">
          <button
            onClick={() => getDirection(selectedAddress.latitude, selectedAddress.longitude)}
            type="button"
            class="text-white shrink-0 grow-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Direction
          </button>
          <Link
            to={`/locations/${id}/request-delivery`}
            class="py-2.5 px-5 shrink-0 grow-0 me-2 mb-2 text-sm font-medium text-blue-900 focus:outline-none bg-white rounded-lg border border-blue-600 hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-700 dark:bg-blue-800 dark:text-blue-400 dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700"
          >
            Request Delivery ($0.99)
          </Link>
        </div>
        <div>
          <div className="">
            <h1 className="font-semibold text-2xl text-stone-900">{selectedAddress.name}</h1>
            <span>
              {Array.from({ length: selectedAddress.rate }).map((item) => "⭐")} {selectedAddress.rate}/5
            </span>
            <p className="font-semibold text-stone-500">$5.95/day/item</p>
          </div>

          <div className="max-w-7xl md:max-w-3xl m-auto space-y-2 text-stone-900">
            <ul className="space-y-3">
              <li>
                <img className="w-5 inline-block" src="../assets/location_icons/direction_icon.svg" />{" "}
                <span>{selectedAddress.street}</span>
              </li>
              <li>
                <img className="w-5 inline-block" src="../assets/location_icons/direction_icon.svg" /> Address - shared
                in booking confirmation
              </li>
              <li>
                <img className="w-5 inline-block" src="../assets/location_icons/direction_icon.svg" /> Items insured up
                to $5000
              </li>
              <li>
                <img className="w-5 inline-block" src="../assets/location_icons/direction_icon.svg" /> Free cancellation
              </li>
            </ul>

            <div className="text-stone-900">
              <h2 className="text-xl font-semibold">HOURS</h2>
              <ul>
                <li>
                  <span className="font-semibold">Mon-Sat</span> 8:00 am - 9:00 pm
                </li>
                <li>
                  <span className="font-semibold">Sun-Sat</span> 8:00 am - 6:00 pm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Address;
