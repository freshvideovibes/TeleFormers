import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo und Beschreibung */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="w-6 h-6 bg-white rounded-sm relative">
                  {/* Robot eyes */}
                  <div className="absolute top-1 left-1 w-1 h-1 bg-blue-500 rounded-full"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-blue-500 rounded-full"></div>
                  {/* Headset */}
                  <div className="absolute -top-1 left-0 right-0 h-2 bg-blue-600 rounded-t-sm"></div>
                  <div className="absolute -left-1 top-2 w-1 h-1 bg-blue-600 rounded-full"></div>
                  <div className="absolute -right-1 top-2 w-1 h-1 bg-blue-600 rounded-full"></div>
                </div>
                {/* Sound waves */}
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
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">TELEFORMERS</span>
                <span className="text-xs text-orange-500">Formation für Kommunikation</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              TeleFormers ist die führende Plattform für Training und Vermittlung von Home-Office Telefonie-Talenten. 
              Wir verwandeln Menschen in professionelle Kommunikatoren.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">Über uns</a></li>
              <li><a href="#talents" className="text-gray-300 hover:text-orange-500 transition-colors">Für Talente</a></li>
              <li><a href="#companies" className="text-gray-300 hover:text-orange-500 transition-colors">Für Unternehmen</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-300">
              <li>+49 123 456 789</li>
              <li>info@teleformers.de</li>
              <li>Musterstraße 123</li>
              <li>12345 Musterstadt</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TeleFormers. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Datenschutz
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Impressum
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
