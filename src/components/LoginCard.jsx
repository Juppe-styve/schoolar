import React from "react";

export default function LoginCard() {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white border border-blue-200 rounded-lg px-4 py-2">
          <span className="text-2xl font-extrabold text-blue-600">eCampus</span>
        </div>
        <div className="text-gray-600 mt-2">Bienvenue</div>
      </div>

      <form className="mt-6 space-y-4">
        <div>
          <input
            type="email"
            placeholder="Entrer Votre Address Mail"
            className="w-full px-4 py-3 border border-blue-200 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <div className="relative">
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full px-4 py-3 border border-blue-200 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400"
            >
              👁️
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            Se rappeler de moi
          </label>
          <a className="text-blue-600">Mot de passe oublié ?</a>
        </div>

        <div className="mt-2">
          <div className="flex items-center gap-4 border rounded-md p-3">
            <input type="checkbox" className="w-5 h-5" />
            <div className="flex-1 text-sm">Je ne suis pas un robot</div>
            <div className="text-xs text-gray-400">reCAPTCHA</div>
          </div>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md font-medium">
          Se Connecter
        </button>

        <button className="w-full mt-3 bg-gray-100 text-gray-800 py-3 rounded-md flex items-center justify-center gap-3 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.24 1.52 8.1 2.78l6.02-6.02C35.7 3.18 30.19 1 24 1 14.97 1 7.4 5.95 3.74 13.09l7.09 5.5C12.97 13.04 18.98 9.5 24 9.5z"
            />
          </svg>
          Connexion avec Google
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Pas encore de compte ?{" "}
        <a className="text-blue-600 font-medium">Inscrivez-vous ici</a>
      </p>
    </div>
  );
}
