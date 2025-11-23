import { Search, Filter, ArrowDown } from "lucide-react";

const requestsData = [
  {
    id: "DD12UACFAST05",
    description: "Relevé de note",
    date: "29/03/2025",
    status: "A",
  },
  {
    id: "FF23DOCREQ011",
    description: "Diplôme de Licence",
    date: "28/03/2025",
    status: "P",
  },
  {
    id: "AA01MSG0009",
    description: "Problème de connexion",
    date: "27/03/2025",
    status: "R",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "A":
      return { bg: "bg-green-100", text: "text-green-700", label: "A" };
    case "P":
      return { bg: "bg-yellow-100", text: "text-yellow-700", label: "P" };
    case "R":
      return { bg: "bg-red-100", text: "text-red-700", label: "R" };
    default:
      return { bg: "bg-gray-100", text: "text-gray-700", label: "?" };
  }
};

export default function RecentRequestsTable() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Dernières demandes
      </h3>

      {/* Barre de recherche et filtres */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex-1 relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Rechercher"
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter size={16} className="mr-2" />
          Filtre
        </button>
        <button className="flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
          Trier par: Date
          <ArrowDown size={16} className="ml-2" />
        </button>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Description
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Statut
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {requestsData.map((request, index) => {
              const status = getStatusStyle(request.status);
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {request.id}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {request.description}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {request.date}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${status.bg} ${status.text}`}
                    >
                      {status.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
