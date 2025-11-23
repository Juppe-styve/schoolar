import React from "react";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=1400&q=80";

export default function Hero() {
  return (
    <section className="relative my-12 lg:my-20 flex flex-col lg:flex-row items-start gap-8">
      <div className="lg:w-2/3 pt-4 lg:pt-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
          Bienvenue sur la plateforme des services universitaires
        </h1>
        <p className="mt-6 text-gray-600 max-w-xl">
          Accédez à vos documents académiques, gérez vos demandes et bien plus
          encore.
        </p>

        <div className="mt-8 flex gap-4">
          <a className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:shadow-lg cursor-pointer">
            Découvrir eCampus
          </a>
          <a className="inline-block bg-green-500 text-white px-6 py-3 rounded-full shadow hover:shadow-lg cursor-pointer">
            Vérifier un document
          </a>
        </div>
      </div>

      <div className="lg:w-1/3 relative">
        <img
          src={IMAGE_URL}
          alt="students"
          className="w-full h-96 sm:h-[520px] lg:h-[560px] rounded-lg object-cover shadow-lg"
        />

        <div className="absolute -bottom-6 right-8 bg-white/60 backdrop-blur-md rounded-2xl px-5 py-4 flex items-center gap-4 shadow-md border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=60"
            alt="prof"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-blue-600 font-semibold text-sm">
              Professeur KOUAWO
            </div>
            <div className="text-gray-600 text-sm">
              Félicitations! Vous avez validé vos examens
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
