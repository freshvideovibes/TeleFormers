import React from 'react';

const ForTalents: React.FC = () => {
  return (
    <section id="talents" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Für <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">Talente</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Werden Sie Teil unseres Netzwerks professioneller Telefonie-Talente und starten Sie Ihre Karriere im Home-Office.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Ihr Weg zum Erfolg
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Bewerbung & Auswahl</h4>
                  <p className="text-gray-300">Senden Sie Ihre Bewerbung und durchlaufen Sie unseren Auswahlprozess</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Intensivtraining</h4>
                  <p className="text-gray-300">4-wöchiges Spezialtraining für Kundenservice, Vertrieb oder Marktforschung</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Zertifizierung</h4>
                  <p className="text-gray-300">Erhalten Sie Ihr TeleFormers-Zertifikat und werden Sie Teil unseres Netzwerks</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Vermittlung</h4>
                  <p className="text-gray-300">Wir vermitteln Sie an passende Unternehmen und begleiten Sie bei Ihrem Start</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 p-8 rounded-xl border border-blue-500/20">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">Ihre Vorteile</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Flexible Arbeitszeiten im Home-Office</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Attraktive Vergütung ab 15€/Stunde</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Professionelle Ausrüstung wird gestellt</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Kontinuierliche Weiterbildung</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Karriereentwicklung und Aufstiegsmöglichkeiten</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Kundenservice</h3>
            <p className="text-gray-300 text-sm">
              Unterstützung von Kunden bei Fragen und Problemen mit professioneller Kommunikation
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Vertrieb</h3>
            <p className="text-gray-300 text-sm">
              Verkauf von Produkten und Dienstleistungen mit überzeugender Kommunikation
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Marktforschung</h3>
            <p className="text-gray-300 text-sm">
              Durchführung von Umfragen und Datenerhebung für Marktanalysen
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Jetzt bewerben
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForTalents;