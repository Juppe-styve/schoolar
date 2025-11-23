import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dashboard = () => {
    navigate("/dashboard");
  };
  const register = () => {
    navigate("/register");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl px-10 py-12 flex flex-col">
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="bg-white border border-blue-300 rounded-xl px-6 py-3">
          <span className="text-3xl font-extrabold text-blue-600">eCampus</span>
        </div>
        <div className="text-gray-600 text-sm">Bienvenue</div>
      </div>

      <form className="flex flex-col gap-4 flex-1">
        <input
          type="email"
          placeholder="Entrer Votre Address Mail"
          className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-3.5-10-8 0-1 .5-2 1-3m3-3A9.96 9.96 0 0112 5c5 0 9 3.5 10 8a9.97 9.97 0 01-4 5.5M3 3l18 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center justify-between text-[12px] text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-3" />
            Se rappeler de moi
          </label>
          <a className="text-blue-600 cursor-pointer underline">
            Mot de passe oublié ?
          </a>
        </div>
        <hr className="border border-gray-300" />
        <div className="shadow shadow-gray-300 rounded-lg p-3 flex items-center gap-3">
          <input type="checkbox" className="w-5 h-5" />
          <span className="text-sm">Je ne suis pas un robot</span>
          <img
            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
            className="w-10 opacity-70"
          />
        </div>

        <button
          onClick={dashboard}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition cursor-pointer"
        >
          Se Connecter
        </button>

        <button className="w-full bg-white text-gray-700 py-3 rounded-lg flex items-center justify-center gap-3 border shadow-sm hover:bg-gray-50 transition cursor-pointer">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Connexion avec Google
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-8">
        Pas encore de compte ?{" "}
        <a
          onClick={register}
          className="text-blue-600 font-medium cursor-pointer"
        >
          Inscrivez-vous ici
        </a>
      </p>
    </div>
  );
}
