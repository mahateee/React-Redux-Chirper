import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav class="bg-gray-50 dark:bg-gray-700">
      <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
          <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            <li>
              <Link to="/">
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/new">
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  New
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
