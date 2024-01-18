import { Link, useParams } from "react-router-dom";

function Address() {
  const { id } = useParams();

  function getDirection() {
    window.open("https://maps.google.com?q=" + 31.6257 + "," + -7.9891);
  }

  return (
    <section className="space-y-5">
      <div>
        <img src="../public/staticmap.png" className="w-100vh h-40" />
      </div>

      <section className="md:flex px-5 lg:max-w-5xl max-w-7xl md:max-w-3xl m-auto space-y-2 justify-between">
        <div className="space-x-2 shrink-0">
          <button
            onClick={getDirection}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Direction
          </button>
          <Link
            to={`/locations/${id}/request-delivery`}
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-blue-900 focus:outline-none bg-white rounded-lg border border-blue-600 hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-700 dark:bg-blue-800 dark:text-blue-400 dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700"
          >
            Request Delivery ($0.99)
          </Link>
        </div>
        <div>
          <div className="">
            <h1 className="font-semibold text-2xl">Luggage Storage near Jamaa L'Fna Square</h1>
            <span>⭐⭐⭐ 3/5</span>
            <p className="font-semibold text-stone-500">$5.95/day/item</p>
          </div>

          <div className="max-w-7xl md:max-w-3xl m-auto space-y-2">
            <ul className="space-y-3">
              <li>
                <img className="w-5 inline-block" src="../public/location_icons/direction_icon.svg" />{" "}
                <span>0.23 miles From Penn Station</span>
              </li>
              <li>
                <img className="w-5 inline-block" src="../public/location_icons/direction_icon.svg" /> Address - shared
                in booking confirmation
              </li>
              <li>
                <img className="w-5 inline-block" src="../public/location_icons/direction_icon.svg" /> Items insured up
                to $5000
              </li>
              <li>
                <img className="w-5 inline-block" src="../public/location_icons/direction_icon.svg" /> Free cancellation
              </li>
            </ul>

            <div>
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
