import { Link } from "react-router-dom";

function UserDropDown({ userRef }: { userRef: React.RefObject<HTMLDivElement> }) {

  return (
    <>
      <div
        ref={userRef}
        className="absolute right-0 top-7 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
        <div className="px-4 py-3">
          <Link to="/" className="block text-sm text-gray-900 dark:text-white">
            Bonnie Green
          </Link>
          <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
            name@flowbite.com
          </span>
        </div>
        <ul className="py-2">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Earnings
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserDropDown;
