import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Über <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">TeleFormers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Wir sind die führende Plattform für die Ausbildung und Vermittlung von Telefonie-Talenten im Home-Office Bereich.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Professionelle Ausbildung</h3>
            <p className="text-gray-300">
              Umfassende Schulungsprogramme für Kundenservice, Vertrieb und Marktforschung mit modernsten Methoden.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">
            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Talentvermittlung</h3>
            <p className="text-gray-300">
              Direkte Vermittlung qualifizierter Talente an Unternehmen für Home-Office Telefonie-Positionen.
            </p>
          </div>

          <div className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-colors">
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Qualitätssicherung</h3>
            <p className="text-gray-300">
              Kontinuierliche Überwachung und Verbesserung der Kommunikationsqualität unserer Talente.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Warum TeleFormers?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Spezialisierte Ausbildung</h4>
                  <p className="text-gray-300">Maßgeschneiderte Schulungsprogramme für verschiedene Telefonie-Bereiche</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Flexible Arbeitsmodelle</h4>
                  <p className="text-gray-300">Home-Office Lösungen für optimale Work-Life-Balance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Moderne Technologie</h4>
                  <p className="text-gray-300">Aktuelle Tools und Plattformen für effiziente Kommunikation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-orange-500/20 p-8 rounded-xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Schnelle Vermittlung</h4>
                <p className="text-gray-300 mb-6">
                  Innerhalb von 48 Stunden nach Abschluss der Ausbildung sind unsere Talente einsatzbereit.
                </p>
                <div className="text-3xl font-bold text-orange-500">98%</div>
                <p className="text-gray-300">Erfolgsquote bei der Vermittlung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;