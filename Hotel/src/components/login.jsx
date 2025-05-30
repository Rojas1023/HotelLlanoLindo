import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';
import logo from '../assets/logo.png';

const Logo = () => (
  <div className="logo-container">
    <img 
      src={logo} 
      alt="HOTEL LLANO LINDO" 
      className="logo" 
    />
  </div>
);

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [rol, setRol] = useState('recepcionista');
  const [mostrar, setMostrar] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', usuario, 'Contraseña:', contrasena, 'Rol:', rol);
    
    if (rol === 'recepcionista') {
      navigate('/Rack/RoomsPage');
    } else if (rol === 'administrador') {
      navigate('/admin');
    }
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
            {mostrar ? '𖠂' : '∅'}
          </span>
        </div>
        
        <div className="campo">
          <select
            id="rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            className="rol-selector"
          >
            <option value="recepcionista">Recepcionista</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>
        
        <button type="submit" className="boton-ingresar">
          <strong>Ingresar</strong>
        </button>
      </form>
    </div>
  );
};

export default Login;