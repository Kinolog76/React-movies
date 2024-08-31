import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";

import UserDropDown from "./UserDropDown";
import HeaderMenu from "./HeaderMenu";

import logo from "/public/img/logo.png";
import userNoImage from "/public/img/user-no-image.jpg";

function Header() {
  const [userOpen, setUserOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef<HTMLButtonElement>(null);
  const userOpenRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleUser = () => setUserOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userRef.current &&
        !userRef.current.contains(event.target as Node) &&
        userOpenRef.current &&
        !userOpenRef.current.contains(event.target as Node)
      ) {
        setUserOpen(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuOpenRef.current &&
        !menuOpenRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="bg-white border-gray-600 dark:bg-gray-900 fixed top-0 left-0 right-0 z-50 border-b-2 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4 md:p-4 relative">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-auto w-24" alt="Flowbite Logo" />
          </Link>
          <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              ref={userOpenRef}
              onClick={toggleUser}>
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src={userNoImage} alt="user photo" />
            </button>
            {userOpen && <UserDropDown userRef={userRef} />}
            <button
              ref={menuOpenRef}
              type="button"
              className="inline-flex items-center p-1 w-9 h-9 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <X strokeWidth={2} size={30} />
              ) : (
                <AlignJustify strokeWidth={2} size={30} />
              )}
            </button>
          </div>
          <HeaderMenu menuRef={menuRef} menuOpen={menuOpen} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
