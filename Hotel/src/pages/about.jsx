import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h1>Sobre Nosotros</h1>
      <p>Bienvenido al sistema de gestión del Hotel.</p>
      <Link to="/" className="boton-volver">
        Volver al Login
      </Link>
    </div>
  );
};

export default About;