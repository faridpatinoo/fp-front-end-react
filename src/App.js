import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import AutoplaySwiper from './components/Swipers/Autoplay/AutoplaySwiperComponent';
import Section from './components/Sections/Sections';
import Footer from './components/Footer/Footer';

import { DataProvider } from './Context/DataContext';

function App() {
  return (
    <div className="App">
      <Router>
        <DataProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AutoplaySwiper />
                  <Section title="Animations" category="Animations" />
                  <Section title="Reels" category="Reels" />
                  <Section title="Facebook" category="Facebook" />
                  <Section title="Tv" category="Tv" />
                  <Section title="YouTube" category="YouTube" />
                  <Section title="Originals" category="originals" />
                  <Section title="End-Card" category="End-card" />
                </>
              }
            />
            <Route
              path='/showPreview'
              element={
                <>

                </>
              }
            />
          </Routes>
          <Footer />
        </DataProvider>
      </Router>
    </div>
  );
}

export default App;
