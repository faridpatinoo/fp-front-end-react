import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from './components/Utils/ScrollToTop';
import UploadVideoModal from './components/Modal/UploadVideoModal';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import AutoplaySwiper from './components/Swipers/Autoplay/AutoplaySwiperComponent';
import Section from './components/Sections/Sections/Sections';
import DynamicSection from './components/Sections/DynamicSection/DynamicSection';

import ShowComponent from './components/ShowPreview/ShowPreviewComponent';
import SectionPage from './components/Sections/SectionPage/SectionPage';

import { DataProvider } from './Context/DataContext';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Router>
        <DataProvider>
          <Header onUploadClick={openModal} />

          {isModalOpen && (
            <UploadVideoModal onClose={closeModal} />
          )}

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
                  <DynamicSection />
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
