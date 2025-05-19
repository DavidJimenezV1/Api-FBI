import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MostWantedPage from './pages/MostWantedPage';
import CrimesPage from './pages/CrimesPage';
import NewsAlertsPage from './pages/NewsAlertsPage';
import StatisticsPage from './pages/StatisticsPage';
import FavoritesPage from './pages/FavoritesPage';
import SettingsPage from './pages/SettingsPage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/most-wanted" element={<MostWantedPage />} />
          <Route path="/crimes" element={<CrimesPage />} />
          <Route path="/news-alerts" element={<NewsAlertsPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;