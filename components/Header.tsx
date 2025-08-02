import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
            {/* Transformer-inspired logo */}
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.82 8 12 11.82 5.18 8 12 4.18zM5 9.18l6 3.35v6.29l-6-3.35V9.18zm8 9.64v-6.29L19 9.18v6.29l-6 3.35z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">TELEFORMERS</h1>
            <p className="text-sm text-orange-400">Formation für Kommunikation</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">
            Über uns
          </a>
          <a href="#talents" className="text-gray-300 hover:text-orange-400 transition-colors">
            Für Talente
          </a>
          <a href="#companies" className="text-gray-300 hover:text-orange-400 transition-colors">
            Für Unternehmen
          </a>
          <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">
            Kontakt
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;