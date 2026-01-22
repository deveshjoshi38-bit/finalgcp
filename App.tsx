import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AudioProvider } from './contexts/AudioContext';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <AudioProvider>
      <HashRouter>
        <SmoothScroll>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </SmoothScroll>
      </HashRouter>
    </AudioProvider>
  );
}

export default App;