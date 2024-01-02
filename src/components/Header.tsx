import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-16 bg-gray-200">
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-black">
            <p className="text-xl font-bold text-gray-900 mt-3">Takeshi Blog</p>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/en"
            className="px-4 py-2 text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
          >
            en
          </Link>
          <Link
            href="/ja"
            className="px-4 py-2 text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
          >
            ja
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
