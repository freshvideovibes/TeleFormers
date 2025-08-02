import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {/* Logo in Hero */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center relative overflow-hidden animate-pulse-glow">
                  <div className="w-12 h-12 bg-white rounded-md relative">
                    {/* Robot eyes */}
                    <div className="absolute top-2 left-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                    {/* Headset */}
                    <div className="absolute -top-2 left-0 right-0 h-4 bg-blue-600 rounded-t-md"></div>
                    <div className="absolute -left-2 top-4 w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="absolute -right-2 top-4 w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  {/* Sound waves */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse mt-2"></div>
                  </div>
                  {/* Equalizer */}
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-1 h-2 bg-blue-600"></div>
                    <div className="w-1 h-1 bg-blue-600 mt-2"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-6xl font-bold text-white">TELEFORMERS</span>
                <span className="text-lg md:text-xl text-orange-500">Formation für Kommunikation</span>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Wir verwandeln Menschen in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">
            professionelle Kommunikatoren
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          TeleFormers ist die Plattform für Training und Vermittlung von Home-Office Telefonie-Talenten. 
          Wir bilden Menschen zu professionellen Kommunikatoren für Kundenservice, Vertrieb und Forschung aus.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#talents" 
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Für Talente
          </a>
          <a 
            href="#companies" 
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
          >
            Für Unternehmen
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;