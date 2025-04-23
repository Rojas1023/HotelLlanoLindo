import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo.png';

const Logo = () => (
  <div className="logo-container">
    <img 
      src={logo} 
      alt="HOTEL LANOIN" 
      className="logo" 
    />
  </div>
);

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrar, setMostrar] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', usuario, 'Contraseña:', contrasena);
    navigate('/about');
  };

  return (
    <div className="login-container">
      <Logo />
      
      <h1 className="titulo">Iniciar Sesión</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        
        <div className="campo contraseña">
          <input
            type={mostrar ? 'text' : 'password'}
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setMostrar(!mostrar)}
            aria-label={mostrar ? 'Ocultar contraseña' : 'Mostrar contraseña'}
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