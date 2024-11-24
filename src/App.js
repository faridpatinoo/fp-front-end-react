import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from './components/Utils/ScrollToTop';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import AutoplaySwiper from './components/Swipers/Autoplay/AutoplaySwiperComponent';
import Section from './components/Sections/Sections/Sections';

import ShowComponent from './components/ShowPreview/ShowPreviewComponent';
import SectionPage from './components/Sections/SectionPage/SectionPage';

import { DataProvider } from './Context/DataContext';
import { DataContext } from './Context/DataContext';

function App() {
  const videos = useContext(DataContext);

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
                  <ScrollToTop />
                  <ShowComponent />
                  {videos?.map(video => {
                    return <Section key={video._id} title={video.category} category={video.category} />;
                  })}
                </>
              }
            />


            <Route
              path='/section'
              element={
                <>
                  <ScrollToTop />
                  <SectionPage />
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
