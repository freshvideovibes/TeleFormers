
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ForTalents from './components/ForTalents';
import ForCompanies from './components/ForCompanies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <ForTalents />
        <ForCompanies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
