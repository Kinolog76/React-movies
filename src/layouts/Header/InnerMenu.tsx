import { AlignJustify, X } from "lucide-react";
import UserDropDown from "./UserDropDown";
import userNoImage from "/public/img/user-no-image.jpg";

interface InnerMenuProps {
  userOpen: boolean;
  menuOpen: boolean;
  toggleUser: () => void;
  toggleMenu: () => void;
  userOpenRef: React.RefObject<HTMLButtonElement>;
  menuOpenRef: React.RefObject<HTMLButtonElement>;
  userRef: React.RefObject<HTMLDivElement>;
}

function InnerMenu({
  userOpen,
  menuOpen,
  toggleUser,
  toggleMenu,
  userOpenRef,
  menuOpenRef,
  userRef,
}: InnerMenuProps) {
  return (
    <div className="md:ml-16 relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        ref={userOpenRef}
        onClick={toggleUser}>
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src={userNoImage} alt="user photo" />
      </button>
      {userOpen && <UserDropDown userRef={userRef} />}
      <button
        ref={menuOpenRef}
        className="inline-flex items-center p-1 w-9 h-9 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleMenu}>
        <span className="sr-only">Open main menu</span>
        {menuOpen ? <X strokeWidth={2} size={30} /> : <AlignJustify strokeWidth={2} size={30} />}
      </button>
    </div>
  );
}

export default InnerMenu;
