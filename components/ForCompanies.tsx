import React from 'react';

const ForCompanies: React.FC = () => {
  return (
    <section id="companies" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Für <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">Unternehmen</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Finden Sie qualifizierte Telefonie-Talente für Ihre Home-Office Positionen und steigern Sie Ihre Effizienz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Unsere Dienstleistungen
            </h3>
            <div className="space-y-6">
              {[
                {
                  iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                  title: "Talent-Sourcing",
                  description: "Wir finden die besten Talente für Ihre spezifischen Anforderungen",
                },
                {
                  iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                  title: "Maßgeschneiderte Ausbildung",
                  description: "Spezialtraining für Ihre Branche und Produkte",
                },
                {
                  iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Qualitätsmanagement",
                  description: "Kontinuierliche Überwachung und Optimierung der Leistung",
                },
                {
                  iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "Schnelle Bereitstellung",
                  description: "Einsatzbereite Talente innerhalb von 48 Stunden",
                }
              ].map(({iconPath, title, description}) => (
                <div key={title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
                    <p className="text-gray-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-blue-500/10 p-8 rounded-xl border border-orange-500/20">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">Ihre Vorteile</h4>
            <div className="space-y-4">
              {[
                "Reduzierte Personalkosten um 40%",
                "Flexible Skalierung nach Bedarf",
                "Keine langfristigen Verträge",
                "24/7 Verfügbarkeit",
                "Detaillierte Performance-Reports"
              ].map((advantage, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              bg: "bg-blue-500",
              title: "Kundenservice",
              iconPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
              items: [
                "Professionelle Kundenbetreuung",
                "Mehrsprachige Unterstützung",
                "24/7 Verfügbarkeit",
                "Qualitätsüberwachung",
              ]
            },
            {
              bg: "bg-orange-500",
              title: "Vertrieb",
              iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              items: [
                "Outbound/Inbound Sales",
                "Lead-Generierung",
                "Conversion-Optimierung",
                "Performance-Tracking",
              ]
            },
            {
              bg: "bg-green-500",
              title: "Marktforschung",
              iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              items: [
                "Umfragen & Interviews",
                "Datenanalyse",
                "Trend-Erkennung",
                "Reporting",
              ]
            }
          ].map(({bg, title, iconPath, items}) => (
            <div key={title} className={`bg-slate-700 p-6 rounded-xl`}>
              <div className={`w-16 h-16 ${bg} rounded-lg flex items-center justify-center mb-4`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                {items.map(item => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-orange-500/10 p-8 rounded-xl border border-blue-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Bereit für den nächsten Schritt?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Telefonie-Strategie optimieren. 
              Unsere Experten beraten Sie gerne und finden die beste Lösung für Ihr Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Kostenlose Beratung
              </a>
              <a 
                href="tel:+49123456789" 
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCompanies;
