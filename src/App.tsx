import React, { useState } from "react";
import { DayPickerProvider, Footer, DayPickerProps } from "react-day-picker";


import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import HowToUse from "./components/HowToUse";
import Testimonials from "./components/Testimonials";

import garlicPowder from './assets/garlic_powder.png';
import herbInfusedGarlic from './assets/herb_infused_garlic.png';
import moroccanHerbs from './assets/moroccan_herbs.png';
import moroccanPattern from './assets/moroccan_pattern.png';
import thymeProduct from './assets/thyme_product.png';
import Contact from "./components/Contact";
import About from "./components/About";

const initialProps: DayPickerProps = {
  fromYear: 2020,
  toYear: 2030,
  captionLayout: 'dropdown',
  mode: 'single',
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-container">
      

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main id="main-content">
        <Hero />
        <About />
        <Products />
        <Benefits />
        <HowToUse />
        <Testimonials />
        <Contact />
      </main>

      <DayPickerProvider initialProps={initialProps}>
        <Footer />
      </DayPickerProvider>
    </div>
  );
};

export default App;
