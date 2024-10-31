import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-white text-2xl">MyBlog</h1>
      </Link>

      <ul className="flex space-x-4">
        <li>
          {/* <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Google
          </a> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
