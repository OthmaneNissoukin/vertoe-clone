import { Link } from "react-router-dom";

function Location({ location }) {
  return (
    <article className="flex gap-2 items-center">
      <div className="w-32">
        <img src="cities/agadir.jpg" />
      </div>
      <div className="space-y-2">
        <div>
          <h2 className="font-semibold">
            {location.name}

            {!location.status && (
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                FULL
              </span>
            )}
          </h2>
          <p className="text-sm font-semibold text-stone-600">{location.street}</p>
          <p className="text-sm font-semibold text-stone-600">{location.price}/day/item</p>
        </div>
        <Link
          to={`/locations/${location.name.replaceAll(" ", "-").toLowerCase()}`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Book
        </Link>
      </div>
    </article>
  );
}

export default Location;
