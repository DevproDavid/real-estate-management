import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './pages/Properties'
import ServicesPage from './pages/Services'
import ProfilePage from './pages/ProfilePage'
import AgentPage from './pages/AgentPage'
import ScrollToTop from './components/GeneralComponents/scrollTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/profile/:workerId" element={<ProfilePage />} />
        <Route path="/find-agents" element={<AgentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
