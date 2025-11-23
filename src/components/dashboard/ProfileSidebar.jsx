import { Copy, ChevronUp, ChevronDown } from "lucide-react";

const CalendarDay = ({ day, isCurrentMonth, isToday, isSelected }) => {
  let baseClass =
    "w-9 h-9 flex items-center justify-center rounded-lg text-sm cursor-pointer transition-colors";

  if (!isCurrentMonth) {
    baseClass += " text-gray-300";
  } else if (isToday) {
    baseClass += " bg-blue-600 text-white font-semibold";
  } else if (isSelected) {
    baseClass += " bg-blue-100 text-blue-600 font-semibold";
  } else {
    baseClass += " text-gray-700 hover:bg-gray-100";
  }

  return <div className={baseClass}>{day}</div>;
};

export default function ProfileSidebar() {
  // Jours du calendrier pour Mars 2025
  const calendarDays = [
    // Février 2025 (Jours précédents)
    { day: 29, current: false },
    { day: 30, current: false },
    { day: 31, current: false },
    // Mars 2025
    ...Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      current: true,
      today: i + 1 === 27,
    })),
    // Avril 2025 (Jours suivants)
    { day: 1, current: false },
    { day: 2, current: false },
  ];

  return (
    <div className="w-80 space-y-6">
      {/* Carte 1: Profil */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 uppercase mb-4">
          Profil
        </h3>

        {/* Image de profil */}
        <div className="flex justify-center mb-4">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
              alt="Photo de profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Nom et ID */}
        <div className="text-center mb-6">
          <p className="text-xl font-bold text-gray-800">Sakine INOUSSA</p>
          <div className="flex items-center justify-center text-sm text-gray-500 mt-2">
            <span>1301201123</span>
            <Copy
              size={14}
              className="ml-2 cursor-pointer hover:text-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Rôles et Appartenance */}
        <div className="space-y-4 border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 uppercase">Demandes</span>
            <span className="font-bold text-gray-800">8 • 03/2025</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 uppercase">Rôle</span>
            <span className="font-semibold text-green-600">Super Admin</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 uppercase">
              Appartenance
            </span>
            <span className="font-semibold text-gray-800">Prestataire APP</span>
          </div>
        </div>
      </div>

      {/* Carte 2: Calendrier */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        {/* Header du calendrier */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Mars 2025</h3>
          <div className="flex space-x-1">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronUp size={18} className="text-gray-500" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronDown size={18} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Jours de la semaine */}
        <div className="grid grid-cols-7 text-center text-xs text-gray-500 uppercase font-medium mb-3">
          {["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Grille du calendrier */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((date, index) => (
            <CalendarDay
              key={index}
              day={date.day}
              isCurrentMonth={date.current}
              isToday={date.today}
              isSelected={date.day === 15 && date.current}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
