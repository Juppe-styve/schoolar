import React from "react";

const FLAG_GB = "https://flagcdn.com/w20/gb.png";
const FLAG_FR = "https://flagcdn.com/w20/fr.png";

export default function Navbar() {
  return (
    <header className="py-4 shadow-sm bg-white">
      <nav className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo gauche */}
        <div className="flex items-center gap-4">
          <div className="text-blue-600 font-extrabold text-xl bg-white rounded px-3 py-1 border border-blue-100">
            eCampus
          </div>
        </div>

        {/* Menu droite */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8">
            <li className="text-black font-bold">Accueil</li>
            <li className="text-black font-bold">Services</li>
            <li className="text-black font-bold">Messagerie</li>
            <li className="text-black font-bold">Support</li>
          </ul>

          <div className="flex items-center gap-3">
            <select
              aria-label="Choisir la langue"
              className="text-sm rounded-full px-3 py-2 bg-white border border-gray-200"
            >
              <option value="en">EN 🇬🇧</option>
              <option value="fr">FR 🇫🇷</option>
            </select>

            <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm">
              Se connecter
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
