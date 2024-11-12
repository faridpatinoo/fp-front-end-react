import './App.css';
import React from 'react';
import Section from './components/Sections/Sections';

function App() {
  return (
    <div className="App">
      <Section title="Animations" category="Animations" />
      <Section title="Reels" category="Reels" />
      <Section title="Facebook" category="Facebook" />
      <Section title="Tv" category="Tv" />
      <Section title="YouTube" category="YouTube" />
      <Section title="Originals" category="originals" />
      <Section title="End-Card" category="End-card" />
    </div>
  );
}

export default App;
