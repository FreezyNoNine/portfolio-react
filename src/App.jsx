// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PageAccueil from './components/pages/page-accueil/page-accueil';
import PagePresentation from './components/pages/presentation/presentation';

const Placeholder = ({ text }) => (
    <div>
        <h1>{text}</h1>
    </div>
);

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`full-container ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<PageAccueil theme={theme} />} />
          <Route path="/presentation" element={<PagePresentation theme={theme} />} />
          <Route path="/cv" element={<Placeholder text="Curriculum Vitae" />} />
          <Route path="/projets" element={<PageAccueil />} />
          <Route path="/competences" element={<Placeholder text="Compétences Techniques" />} />
          <Route path="/stages" element={<Placeholder text="Stages" />} />
          <Route path="/experience" element={<Placeholder text="Experiences" />} />
          <Route path="/contact" element={<Placeholder text="Contact" />} />
          <Route path="/references" element={<Placeholder text="Réferences" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
