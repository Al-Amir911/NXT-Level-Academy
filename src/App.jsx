import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import Programs from './components/Programs';
import Methodology from './components/Methodology';
import Structure from './components/Structure';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Overview />
        <Features />
        <Programs />
        <Methodology />
        <Structure />
        <Pricing onChoosePlan={setSelectedPlan} />
        <Contact selectedPlan={selectedPlan} />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
