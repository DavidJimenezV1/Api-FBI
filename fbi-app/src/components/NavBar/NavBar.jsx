import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Importa NavLink para la navegación, useNavigate para redirigir
import styles from './NavBar.module.css'; // Importa tus estilos CSS Modules para la NavBar
import { useAuth } from '../../context/AuthContext'; // Importa el hook para acceder al estado de autenticación
import { LogOut } from 'lucide-react'; // Importa el icono de LogOut de lucide-react (asegúrate de tenerlo instalado)

function NavBar() {
  const { session, signOut } = useAuth(); // Obtiene el objeto de sesión (si el usuario está logueado) y la función para cerrar sesión
  const navigate = useNavigate(); // Hook para la navegación programática después de cerrar sesión

  const handleSignOut = async () => {
    await signOut(); // Llama a la función de cerrar sesión de Supabase
    navigate('/login'); // Redirige al usuario a la página de login después de cerrar sesión
  };

  return (
    // Aplica los estilos de la barra de navegación. El color de fondo y texto se tomarán de las variables.
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          {/* NavLink aplica la clase 'active' automáticamente a los enlaces de la ruta actual.
              Asegúrate de que los estilos para '.navItem' y '.active' en NavBar.module.css usen variables. */}
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Home
          </NavLink>
        </li>
        {session && ( // Renderiza estos enlaces SOLO si hay una sesión activa (usuario logueado)
          <>
            <li>
              <NavLink to="/most-wanted" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                Most Wanted
              </NavLink>
            </li>
            <li>
              <NavLink to="/fugitives" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                Fugitives
              </NavLink>
            </li>
            <li>
              <NavLink to="/crimes-by-category" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                Crimes by Category
              </NavLink>
            </li>
            <li>
              <NavLink to="/news-alerts" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                News & Alerts
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                Favoritos
              </NavLink>
            </li>
            <li>
              {/* Botón de cerrar sesión, visible solo si el usuario está logueado */}
              <button onClick={handleSignOut} className={styles.logoutButton}>
                <LogOut size={20} /> {/* Icono de LogOut */}
                Cerrar Sesión
              </button>
            </li>
          </>
        )}
        {!session && ( // Renderiza el enlace de Login SOLO si NO hay una sesión activa (el usuario no está logueado)
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : undefined)}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;