import React from "react";

function Hero() {
  return (
    <div className="text-main-900 min-h-screen flex flex-col items-center justify-center">
      <div className="absolute flex items-center justify-center">
        <div className="bg-main-300 rounded-full h-64 w-96 shadow-lg opacity-40 mb-32 blur-2xl"></div>
      </div>
      <div className="relative text-center max-w-3xl">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 relative z-10">
          Temukan Mentor Wanita Profesional Dibidangnya Untuk Membantu Karirmu.
        </h1>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-8 py-3 bg-main-800 rounded-md text-white hover:bg-main-950 transition duration-300">
            Cari Mentor
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
