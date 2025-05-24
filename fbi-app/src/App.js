import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from './context/ThemeContext'; // Importa el hook para acceder al tema
import { useAuth } from './context/AuthContext';   // Importa el hook para acceder al estado de autenticación

// Importa tus componentes de página
import HomePage from './pages/HomePage';
import MostWantedPage from './pages/MostWantedPage';
import FugitivesPage from './pages/FugitivesPage';
import NewsAlertsPage from './pages/NewsAlertsPage';
import CrimesByCategoryPage from './pages/CrimesByCategoryPage';
import FavoritesPage from './pages/FavoritesPage';
import LoginPage from './pages/LoginPage'; // Tu página de Login

// Importa tus componentes de layout
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './App.css'; // Asegúrate de que tus estilos App.css se importen aquí

// Componente auxiliar para proteger rutas
const PrivateRoute = ({ children }) => {
  const { session, loading } = useAuth(); // Obtiene la sesión del usuario y el estado de carga del contexto de autenticación

  if (loading) {
    // Puedes mostrar un spinner o mensaje de carga mientras se verifica la sesión inicial
    return <div>Cargando autenticación...</div>;
  }

  // Si no hay una sesión activa, redirige al usuario a la página de login
  return session ? children : <Navigate to="/login" replace />;
};

function App() {
  const { theme } = useTheme(); // Obtiene el nombre del tema actual ('light' o 'dark') del contexto de tema

  return (
    // Aplica la clase del tema (ej. 'light' o 'dark') al contenedor principal de la aplicación.
    // Esto permite que tus estilos CSS globales (index.css/App.css) apliquen las variables de color correctas.
    <div className={`App ${theme}`}>
      <Router>
        <Header />
        <NavBar />
        <main>
          <Routes>
            {/* Ruta de login (accesible por todos, incluso sin autenticación) */}
            <Route path="/login" element={<LoginPage />} />

            {/* Rutas públicas (accesibles por todos sin necesidad de login) */}
            <Route path="/" element={<HomePage />} />

            {/* Rutas protegidas - Solo accesibles si el usuario está logueado.
                Usamos el componente PrivateRoute para envolver el contenido de la página. */}
            <Route
              path="/most-wanted"
              element={
                <PrivateRoute>
                  <MostWantedPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/fugitives"
              element={
                <PrivateRoute>
                  <FugitivesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/news-alerts"
              element={
                <PrivateRoute>
                  <NewsAlertsPage />
                </PrivateRoute>
              }
            />
             <Route
              path="/crimes-by-category"
              element={
                <PrivateRoute>
                  <CrimesByCategoryPage />
                </PrivateRoute>
              }
            />
             <Route
              path="/favorites"
              element={
                <PrivateRoute>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            {/* Puedes añadir más rutas protegidas aquí siguiendo el mismo patrón */}

            {/* Ruta comodín: redirige a la página principal si la URL no coincide con ninguna ruta definida */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;