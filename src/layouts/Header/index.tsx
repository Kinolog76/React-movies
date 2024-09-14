import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import HeaderMenu from "./MainMenu";
import InnerMenu from "./InnerMenu";
import logo from "/public/img/logo.png";

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
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-1 px-4 md:py-2 relative">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-auto w-24" alt="Flowbite Logo" />
          </Link>
          <InnerMenu
            userOpen={userOpen}
            menuOpen={menuOpen}
            toggleUser={toggleUser}
            toggleMenu={toggleMenu}
            userOpenRef={userOpenRef}
            menuOpenRef={menuOpenRef}
            userRef={userRef}
          />
          <HeaderMenu menuRef={menuRef} menuOpen={menuOpen} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
