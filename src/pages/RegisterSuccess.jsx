import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";

const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80";

export default function RegistrationSuccess() {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
      </div>

      {showNotification && (
        <div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 
                     animate-in slide-in-from-top-4 duration-300"
        >
          <div className="bg-green-600 text-white px-4 py-1.5 rounded-lg shadow-xl flex items-center gap-2">
            <span className="font-normal text-sm">Inscription effectuée</span>
            <button
              onClick={() => setShowNotification(false)}
              className="hover:bg-green-700 rounded-full p-0.5 transition-colors"
              aria-label="Fermer"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div
          className="bg-white/80 rounded-2xl shadow-xl p-12 max-w-sm w-full text-center 
                     backdrop-blur-xs"
        >
          <div className="mb-6 flex justify-center">
            <div className="bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-md">
              <div className="flex items-center space-x-1">
                <span className="text-3xl font-bold text-blue-600">
                  eCampus
                </span>
              </div>
            </div>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
              <Check className="w-10 h-10 text-green-500" strokeWidth={3} />
            </div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed px-4">
            Afin de terminer votre inscription, un mail vous a été envoyé à
            votre adresse mail personnel pour validation.
          </p>
        </div>
      </div>
    </div>
  );
}
