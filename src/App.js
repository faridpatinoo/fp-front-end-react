import './App.css';
import React from 'react';

import { DataProvider } from './Context/DataContext';
import Header from './components/Header/Header';
import AutoplaySwiper from './components/Swipers/Autoplay/AutoplaySwiperComponent';
import Section from './components/Sections/Sections';
import Footer from './components/Footer/Footer';

import './components/Header/header.css'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <AutoplaySwiper />
        <Section title="Animations" category="Animations" />
        <Section title="Reels" category="Reels" />
        <Section title="Facebook" category="Facebook" />
        <Section title="Tv" category="Tv" />
        <Section title="YouTube" category="YouTube" />
        <Section title="Originals" category="originals" />
        <Section title="End-Card" category="End-card" />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
