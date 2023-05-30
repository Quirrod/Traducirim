import { Home } from "iconoir-react";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const links = [
    { name: "Home", href: "/", icon: <Home /> },
  ];
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl">Traducirim</span>
      </div>
      {links.length > 0 && (
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>
      )}
      <div
        ref={parent}
        className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      >
        {isOpen && (
          <div className="text-sm lg:flex-grow">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-400 mr-4"
              >
                {link.icon && (
                  <span className="inline-block align-middle mr-2 hover:animate-bounce">
                    {link.icon}
                  </span>
                )}
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
