import React from "react";
import { Link } from "react-router-dom";

const FLAG_GB = "https://flagcdn.com/w20/gb.png";
const FLAG_FR = "https://flagcdn.com/w20/fr.png";

export default function Navbar() {
  return (
    <header className="py-4 shadow-sm bg-white">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link
          to="/"
          className="text-blue-600 font-extrabold text-xl bg-white rounded px-3 py-1 border border-blue-100"
        >
          eCampus
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8">
            <li className="text-blue-600 font-bold cursor-pointer">Accueil</li>
            <li className="text-gray-700 hover:text-blue-600 font-bold cursor-pointer">
              Services
            </li>
            <li className="text-gray-700 hover:text-blue-600 font-bold cursor-pointer">
              Messagerie
            </li>
            <li className="text-gray-700 hover:text-blue-600 font-bold cursor-pointer">
              Support
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                className="appearance-none bg-transparent text-sm pl-7 pr-2 py-1 cursor-pointer outline-none"
                style={{
                  backgroundImage: `url(${FLAG_GB})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  backgroundSize: "20px",
                }}
              >
                <option value="en">En</option>
                <option
                  value="fr"
                  style={{ backgroundImage: `url(${FLAG_FR})` }}
                >
                  Fr
                </option>
              </select>
            </div>

            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
            >
              Se connecter
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
