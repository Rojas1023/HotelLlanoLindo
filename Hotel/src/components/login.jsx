import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrar, setMostrar] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', usuario, 'Contraseña:', contrasena);
    navigate('/about'); // Redirige a About después del login
  };

  return (
    <div className="login-container">
      <img src="/logo.png" alt="Logo del hotel" className="logo" />
      <h1 className="titulo">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="campo contraseña">
          <input
            type={mostrar ? 'text' : 'password'}
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setMostrar(!mostrar)}
          >
            {mostrar ? '🙈' : '👁️'}
          </span>
        </div>
        <button type="submit" className="boton-ingresar">
          <strong>Ingresar</strong>
        </button>
      </form>
      
    </div>
  );
};

export default Login;