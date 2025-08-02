import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse-glow">
            <svg viewBox="0 0 100 100" className="w-20 h-20 text-white" fill="currentColor">
              {/* Transformer head design */}
              <path d="M50 10 L30 25 L30 35 L20 45 L20 55 L30 65 L30 75 L50 90 L70 75 L70 65 L80 55 L80 45 L70 35 L70 25 Z M50 20 L40 30 L40 40 L35 45 L35 55 L40 60 L40 70 L50 80 L60 70 L60 60 L65 55 L65 45 L60 40 L60 30 Z"/>
              {/* Eyes */}
              <circle cx="42" cy="40" r="3" fill="white"/>
              <circle cx="58" cy="40" r="3" fill="white"/>
              {/* Mouth plate */}
              <rect x="45" y="50" width="10" height="8" rx="2" fill="white"/>
            </svg>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">TELE</span>
          <span className="text-orange-400">FORMERS</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-orange-400 mb-8 font-light">
          Formation für Kommunikation
        </p>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Wir verwandeln Kommunikation in eine Superkraft. Entdecke, wie wir Talente und Unternehmen 
          durch innovative Trainings und maßgeschneiderte Lösungen zusammenbringen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Jetzt starten
          </a>
          <a 
            href="#about" 
            className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Mehr erfahren
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;