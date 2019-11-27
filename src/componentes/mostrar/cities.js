import React from 'react';
import Header from '../header';
import Footer from '../footer';
import SectionCities from '../section-cities';

function Cities() {
  return (
    <div className="Cities">
      <Header />
      <SectionCities />
      {/* <Links /> */}
      <Footer />
    </div>
  );
}

export default Cities;
