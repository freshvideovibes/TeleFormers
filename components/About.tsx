import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Über TeleFormers</h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-6 text-center">
          TeleFormers ist ein zukunftsorientiertes Unternehmen, das sich auf die Ausbildung und Vermittlung von Kommunikations-Talenten spezialisiert. Wir verbinden qualifizierte Personen mit Unternehmen, die im Bereich Inbound/Outbound, Kundenservice, Vertrieb oder Marktforschung tätig sind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-700 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">Unsere Mission</h3>
            <p className="text-gray-300">
              Wir fördern Talente in der Telekommunikation und bereiten sie intensiv auf ihre Aufgaben vor – praxisnah, effektiv und zukunftssicher. Mit professionellen Tools, modernem Training und echter Karrierechance.
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Warum TeleFormers?</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Erfahrene Trainer aus der Branche</li>
              <li>Fokus auf Homeoffice-Kommunikation</li>
              <li>Starke Partnerunternehmen in DACH</li>
              <li>Individuelles Mentoring für jeden Teilnehmer</li>
              <li>Faire Bezahlung und echte Perspektiven</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
