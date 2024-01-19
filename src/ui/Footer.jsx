import { Link } from "react-router-dom";

function Component() {
  return (
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="max-w-7xl lg:max-w-5xl md:max-w-3xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link to={"/"} class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="assets/logo.png" class="h-16" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HT-3NDI</span>
          </Link>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <Link to="/" class="hover:underline">
            HT-3NDI;
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Component;
