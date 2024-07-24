import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleLogout = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div className="p-4 bg-gray-600 text-white flex justify-between items-center ">
      <Link to={"/"}>Logo</Link>

      <div className="flex mx-4 gap-10 items-center">
        <Link to={"/products"}>Products</Link>
        <Link to={"/orders"}>Orders</Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white text-sm px-3 py-1 hover:bg-gray-700 hover:border-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
