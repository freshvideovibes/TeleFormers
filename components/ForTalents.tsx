import React from 'react';

const ForTalents: React.FC = () => {
  return (
    <section id="talents" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Für <span className="text-orange-400">Talente</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Entfalte dein volles Potenzial mit unseren maßgeschneiderten Kommunikationstrainings. 
              Werde zum Kommunikations-Transformer deiner Branche.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Präsentationstraining</h3>
                  <p className="text-gray-300">
                    Lerne, wie du deine Ideen überzeugend und wirkungsvoll präsentierst.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Kommunikationsstärke</h3>
                  <p className="text-gray-300">
                    Entwickle deine zwischenmenschlichen Fähigkeiten für beruflichen Erfolg.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Karriere-Coaching</h3>
                  <p className="text-gray-300">
                    Persönliche Betreuung für deinen nächsten Karriereschritt.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="#contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Training starten
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Deine Transformation beginnt hier</h3>
                <p className="text-gray-300 mb-6">
                  Schließe dich hunderten erfolgreichen Absolventen an, die ihre Kommunikationsfähigkeiten 
                  auf das nächste Level gebracht haben.
                </p>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-orange-400 font-semibold">✨ 95% Erfolgsquote</p>
                  <p className="text-gray-300 text-sm mt-1">bei unseren Teilnehmern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForTalents;