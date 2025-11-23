import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

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

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Inscription réussie!");
  };

  return (
    <div
      className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8
  sm:p-10
  md:p-8
  flex flex-col justify-center"
    >
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="bg-white border border-blue-300 rounded-xl px-6 py-3">
          <span className="text-3xl font-extrabold text-blue-600">eCampus</span>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-600 mb-6 text-sm">
        Veuillez remplir toutes
        <br />
        les informations
      </p>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Email Étudiant */}
        <div>
          <label className="block text-sm font-medium text-blue-600 mb-1">
            Email Étudiant <span className="text-red-500">*</span>
          </label>
          <input
            id="emailEtudiant"
            type="email"
            name="emailEtudiant"
            value={formData.emailEtudiant}
            onChange={handleChange}
            placeholder="exemple@universite.bj"
            className="w-full px-4 py-2.5 md:py-3 text-gray-500 text-sm md:text-base border-2 border-blue-400 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>

        {/* Email Personnel */}
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

        {/* Mot de Passe */}
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

        {/* Répéter Mot de Passe */}
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

        {/* Téléphone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>

          <PhoneInput
            defaultCountry="bj"
            value={formData.telephone}
            onChange={(phone) => setFormData({ ...formData, telephone: phone })}
            inputStyle={{
              width: "100%",
              borderRadius: "0.5rem",
              border: "2px solid #d1d5db",
              padding: "12px",
              fontSize: "14px",
              color: "#4b5563",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl mt-6"
        >
          Inscription
        </button>
      </div>

      {/* Login Link */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Déjà inscrit ?{" "}
        <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
          Se connecter
        </a>
      </p>
    </div>
  );
}
