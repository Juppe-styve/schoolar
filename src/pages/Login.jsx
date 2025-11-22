import React from "react";
import LoginCard from "../components/LoginCard";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* right-side faded image */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
        <img
          src={BG_IMAGE}
          alt="students"
          className="h-full w-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 flex justify-center">
        <LoginCard />
      </div>
    </div>
  );
}
