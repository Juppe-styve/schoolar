import { Settings, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Bienvenue Sakine INOUSSA !
        </h1>
        <p className="text-sm text-gray-500">Lundi 27 Mars 2025</p>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
          <Bell size={22} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
          <Settings size={22} />
        </button>
      </div>
    </header>
  );
}
