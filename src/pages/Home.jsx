import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-6 lg:px-12">
        <Hero />
      </main>
    </div>
  );
}
