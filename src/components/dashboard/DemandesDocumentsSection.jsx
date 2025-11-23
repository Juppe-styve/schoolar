import { CheckCircle, XCircle, Clock, MessageSquare } from "lucide-react";

const DemandIndicator = ({
  icon: Icon,
  label,
  count,
  percentage,
  colorClass,
}) => (
  <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-full mr-4 ${colorClass}`}
    >
      <Icon size={22} className="text-white" />
    </div>
    <div className="flex-1">
      <p className="text-xs text-gray-500 uppercase mb-1">{label}</p>
      <p className="text-lg font-bold text-gray-800">
        {count} <span className="text-sm text-gray-500">• {percentage}</span>
      </p>
    </div>
  </div>
);

export default function DemandesDocumentsSection() {
  const documentData = [
    { label: "PV", color: "bg-blue-500", percentage: 48 },
    { label: "Relevé de note", color: "bg-green-500", percentage: 24 },
    { label: "Acte", color: "bg-yellow-400", percentage: 16 },
    { label: "Attestations", color: "bg-yellow-200", percentage: 6 },
    { label: "Diplômes", color: "bg-orange-300", percentage: 4 },
    { label: "Certificats", color: "bg-green-300", percentage: 2 },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 uppercase mb-4">
          DEMANDES
        </h3>
        <div className="space-y-2">
          <DemandIndicator
            icon={CheckCircle}
            label="Acceptées"
            count="10/15"
            percentage="66%"
            colorClass="bg-green-500"
          />
          <DemandIndicator
            icon={XCircle}
            label="Rejetées"
            count="05/15"
            percentage="33%"
            colorClass="bg-red-500"
          />
          <DemandIndicator
            icon={Clock}
            label="Réclamations"
            count="03/12"
            percentage="•"
            colorClass="bg-yellow-500"
          />
          <DemandIndicator
            icon={MessageSquare}
            label="Messagerie"
            count="02"
            percentage="•"
            colorClass="bg-blue-500"
          />
        </div>
      </div>

      <div className="col-span-2 bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold text-gray-700 uppercase">
            DOCUMENTS
          </h3>
          <div className="text-sm text-gray-500">
            <span className="text-xs">2024/2025</span>
            <span className="ml-4">
              Total : <span className="font-bold text-gray-800">128</span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Graphique circulaire SVG */}
          <div className="relative w-56 h-56 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              {documentData.map((doc, index) => {
                const total = documentData.reduce(
                  (sum, d) => sum + d.percentage,
                  0
                );
                const startAngle = documentData
                  .slice(0, index)
                  .reduce((sum, d) => sum + (d.percentage / total) * 360, 0);
                const angle = (doc.percentage / total) * 360;
                const radius = 90;
                const centerX = 112;
                const centerY = 112;

                const startRad = (startAngle * Math.PI) / 180;
                const endRad = ((startAngle + angle) * Math.PI) / 180;

                const x1 = centerX + radius * Math.cos(startRad);
                const y1 = centerY + radius * Math.sin(startRad);
                const x2 = centerX + radius * Math.cos(endRad);
                const y2 = centerY + radius * Math.sin(endRad);

                const largeArc = angle > 180 ? 1 : 0;

                return (
                  <path
                    key={index}
                    d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`}
                    className={doc.color}
                    fill="currentColor"
                  />
                );
              })}
              <circle cx="112" cy="112" r="60" fill="white" />
            </svg>
          </div>

          {/* Légende */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 flex-1">
            {documentData.map((doc, index) => (
              <div key={index} className="flex items-center">
                <span
                  className={`w-3 h-3 ${doc.color} rounded-full mr-2`}
                ></span>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-600">{doc.label}</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {doc.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
