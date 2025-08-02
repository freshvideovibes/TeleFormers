import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="w-6 h-6 bg-white rounded-sm relative">
                  {/* Augen */}
                  <div className="absolute top-1 left-1 w-1 h-1 bg-blue-500 rounded-full"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-blue-500 rounded-full"></div>
                  {/* Headset */}
                  <div className="absolute -top-1 left-0 right-0 h-2 bg-blue-600 rounded-t-sm"></div>
                  <div className="absolute -left-1 top-2 w-1 h-1 bg-blue-600 rounded-full"></div>
                  <div className="absolute -right-1 top-2 w-1 h-1 bg-blue-600 rounded-full"></div>
                </div>
                {/* Soundwellen */}
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="w-0.5 h-0.5 bg-orange-500 rounded-full animate-pulse mt-1"></div>
                </div>
                {/* Equalizer */}
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                  <div className="w-0.5 h-1 bg-blue-600"></div>
                  <div className="w-0.5 h-0.5 bg-blue-600 mt-1"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">TELEFORMERS</span>
              <span className="text-xs text-orange-500">Formation für Kommunikation</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">Über uns</a>
            <a href="#talents" className="text-gray-300 hover:text-orange-500 transition-colors">Für Talente</a>
            <a href="#companies" className="text-gray-300 hover:text-orange-500 transition-colors">Für Unternehmen</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">Kontakt</a>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-700">
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors">Über uns</a>
              <a href="#talents" className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors">Für Talente</a>
              <a href="#companies" className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors">Für Unternehmen</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-orange-500 transition-colors">Kontakt</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
