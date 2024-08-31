import { NavLink } from "react-router-dom";

function HeaderMenu({
  menuRef,
  menuOpen,
}: {
  menuRef: React.RefObject<HTMLDivElement>;
  menuOpen: boolean;
}) {
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Movies",
      path: "/movies",
    },
    {
      name: "TV Series",
      path: "/tv-series",
    },
  ];

  return (
    <>
      <div
        ref={menuRef}
        className={`items-center justify-between ${
          menuOpen ? "flex" : "hidden"
        } md:static absolute w-full top-16 left-4 right-4 md:flex md:w-auto md:order-1`}
        id="navbar-user">
        <ul className="flex mr-8 md:mr-4 w-full flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "md:text-blue-600 text-white md:bg-transparent bg-blue-700 block py-2 px-3 rounded mb-1"
                    : "block py-2 px-3 text-gray-900 rounded md:hover:underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 mb-1"
                }>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HeaderMenu;
