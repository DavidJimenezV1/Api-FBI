import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Importa la instancia de Supabase
import { ToastContainer, toast } from 'react-toastify'; // Para mostrar notificaciones
import 'react-toastify/dist/ReactToastify.css'; // Estilos CSS de react-toastify
import styles from './LoginPage.module.css'; // Importa los estilos específicos de este componente

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Para alternar entre login y registro

  const handleAuth = async (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página
    setLoading(true); // Activa el estado de carga

    try {
      // Llama a la función de Supabase según si es registro o inicio de sesión
      const { error } = isSignUp
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        throw error; // Si hay un error de Supabase, lo lanza
      }

      // Muestra un mensaje de éxito
      if (isSignUp) {
        toast.success('¡Registro exitoso! Por favor, revisa tu correo electrónico para verificar tu cuenta (si la confirmación está activada).');
      } else {
        toast.success('¡Inicio de sesión exitoso!');
        // Aquí podrías redirigir al usuario, por ejemplo:
        // import { useNavigate } from 'react-router-dom';
        // const navigate = useNavigate();
        // navigate('/');
      }
    } catch (error) {
      // Muestra un mensaje de error si algo falla
      toast.error(error.message);
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  return (
    <div className={styles.container}>
      {/* ToastContainer es donde se renderizarán los mensajes de toast */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      
      <h2 className={styles.title}>{isSignUp ? 'Registrarse' : 'Iniciar Sesión'}</h2>
      
      <form onSubmit={handleAuth} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? 'Cargando...' : (isSignUp ? 'Registrarse' : 'Iniciar Sesión')}
        </button>
      </form>
      
      <p className={styles.toggleText}>
        {isSignUp ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
        <span onClick={() => setIsSignUp(!isSignUp)} className={styles.toggleLink}>
          {isSignUp ? ' Inicia Sesión' : ' Regístrate aquí'}
        </span>
      </p>
    </div>
  );
}

export default LoginPage;