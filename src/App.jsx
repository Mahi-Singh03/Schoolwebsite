import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Activities from './pages/activites';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container  mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;





