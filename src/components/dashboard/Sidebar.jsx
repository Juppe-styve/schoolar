import {
  MenuSquare,
  Users,
  Briefcase,
  BookOpen,
  ClipboardList,
  MailOpen,
  Map,
  Settings,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";

const navItems = [
  { icon: MenuSquare, label: "Dashboard", active: true },
  { icon: Users, label: "Étudiants" },
  { icon: Briefcase, label: "Enseignants" },
  { icon: BookOpen, label: "UE | Matières | Filières" },
  { icon: ClipboardList, label: "Notes" },
  { icon: MailOpen, label: "Délibération" },
  { icon: Map, label: "Bulletin" },
  { icon: Map, label: "Parcours" },
  { icon: ShieldCheck, label: "Réglages académique" },
  { icon: ClipboardList, label: "Demandes", badge: 2 },
  { icon: MailOpen, label: "Vérifications" },
];

const SidebarItem = ({ icon: Icon, label, active, badge }) => (
  <div
    className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
      active
        ? "bg-blue-50 text-blue-600 font-semibold"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    <Icon size={20} className="mr-3" />
    <span className="flex-1 text-sm">{label}</span>
    {badge && (
      <span className="bg-blue-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ml-2">
        {badge}
      </span>
    )}
  </div>
);

export default function Sidebar() {
  return (
    <div className="w-64 flex flex-col border-r h-screen bg-white">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-1 border border-blue-600 rounded-xl py-2 px-3">
          <MenuSquare size={20} className="text-blue-600" />
          <span className="text-xl font-bold text-blue-600">eCampus</span>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </div>

      <div className="p-4 border-t">
        <SidebarItem icon={LifeBuoy} label="Assistance Support" />
      </div>
    </div>
  );
}
