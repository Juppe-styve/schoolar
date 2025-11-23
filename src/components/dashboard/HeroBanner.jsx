import { useState } from "react";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Image de bannière en ligne
  const bannerImageUrl =
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1500&q=80";

  return (
    <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-lg mb-6">
      <img
        src={bannerImageUrl}
        alt="Étudiants souriants et heureux"
        className="w-full h-full object-cover"
      />

      {/* Calque de recouvrement avec texte */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50 flex flex-col justify-center p-10">
        <h2 className="text-3xl font-bold text-white uppercase tracking-wide">
          INSCRIPTION OUVERTE - ECAMPUS
        </h2>
        <p className="text-2xl text-white font-semibold mt-2">RENTRÉE 24/25</p>
      </div>

      {/* Indicateurs de slides */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === currentSlide ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
