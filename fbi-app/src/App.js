import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MostWantedPage from './pages/MostWantedPage';
import CrimesByCategoryPage from './pages/CrimesByCategoryPage';
import NewsAlertsPage from './pages/NewsAlertsPage'; // Importa NewsAlertsPage
import StatisticsPage from './pages/StatisticsPage';
import FavoritesPage from './pages/FavoritesPage';
import SettingsPage from './pages/SettingsPage';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FugitivesPage from './pages/FugitivesPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/most-wanted" element={<MostWantedPage />} />
          <Route path="/crimes" element={<CrimesByCategoryPage />} />
          <Route path="/news-alerts" element={<NewsAlertsPage />} /> {/* Agrega esta ruta */}
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/fugitives" element={<FugitivesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;