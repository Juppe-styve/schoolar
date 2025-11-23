import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate } from "react-router-dom";

export default function SignUpCard() {
  const [formData, setFormData] = useState({
    emailEtudiant: "",
    emailPersonnel: "",
    motDePasse: "",
    confirmerMotDePasse: "",
    telephone: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigator = useNavigate();
  const handleSubmit = () => {
    navigator("/register-success");
  };

  return (
    <div
      className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8
  sm:p-10
  md:p-8
  flex flex-col justify-center"
    >
      <div className="flex justify-center mb-6">
        <div className="bg-white border border-blue-300 rounded-xl px-6 py-3">
          <span className="text-3xl font-extrabold text-blue-600">eCampus</span>
        </div>
      </div>

      <p className="text-center text-gray-600 mb-6 text-sm">
        Veuillez remplir toutes
        <br />
        les informations
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Étudiant <span className="text-red-500">*</span>
          </label>
          <input
            id="emailEtudiant"
            type="email"
            name="emailEtudiant"
            value={formData.emailEtudiant}
            onChange={handleChange}
            placeholder="exemple@universite.bj"
            className="w-full px-4 py-2.5 md:py-3 text-gray-500 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Personnel
          </label>
          <input
            type="email"
            name="emailPersonnel"
            value={formData.emailPersonnel}
            onChange={handleChange}
            placeholder="Email Personnel"
            className="w-full px-4 py-2.5 md:py-3 text-gray-400 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mot de Passe
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              placeholder="Mot de Passe"
              className="w-full px-4 py-2.5 md:py-3 text-gray-400 text-sm md:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Répéter Mot de Passe
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmerMotDePasse"
              value={formData.confirmerMotDePasse}
              onChange={handleChange}
              placeholder="Répéter Mot de Passe"
              className="w-full px-4 py-3 border-2 text-gray-400 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>

          <div className="phone-wrapper">
            <PhoneInput
              defaultCountry="bj"
              value={formData.telephone}
              onChange={(phone) =>
                setFormData({ ...formData, telephone: phone })
              }
            />
          </div>

          <style>{`
    .phone-wrapper .react-international-phone-input-container {
      display: flex;
      flex-direction: row-reverse;      
      border: 2px solid #e5e7eb;        
      border-radius: 0.5rem;
      overflow: hidden;                  
      padding: 0;
      height: 48px;
    }

    .phone-wrapper .react-international-phone-input {
      border: none !important;          
      flex: 1;
      padding: 0 1rem;
      font-size: 0.95rem;
    }

    .phone-wrapper .react-international-phone-country-selector-button {
      border: none !important;          
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0 0.75rem;
      background: white;
    }

    .phone-wrapper .react-international-phone-country-selector-button::after {
      font-size: 0.8rem;
      order: -1;
      color: #6b7280;
    }
      .phone-wrapper {
  position: relative;
  overflow: visible !important;  
  z-index: 10;
}
  .phone-wrapper .react-international-phone-country-selector-dropdown {
  position: absolute;
  top: 100%;                    
  left: auto; 
  z-index: 9999;            
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.custom-phone-input .react-international-phone-input-container {
  position: relative;
  overflow: visible !important;  
  z-index: 20;
}

.custom-phone-input .react-international-phone-country-selector-dropdown {
  position: absolute !important;
  top: 100% !important;          
  left: 0 !important;
  right: auto !important;
  z-index: 9999;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}


    .phone-wrapper img {
      width: 20px;
      border-radius: 3px;
    }

    .phone-wrapper .react-international-phone-input-container:focus-within {
      border-color: #3b82f6;           
    }
  `}</style>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl mt-6 cursor-pointer"
        >
          Inscription
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-6">
        Déjà inscrit ?{" "}
        <a
          href="/login"
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          Se connecter
        </a>
      </p>
    </div>
  );
}
