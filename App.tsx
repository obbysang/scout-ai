import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ScoutDemo from './components/ScoutDemo';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-white/20 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Testimonial />
        <Pricing />
        <ScoutDemo />
      </main>
      <Footer />
    </div>
  );
};

export default App;