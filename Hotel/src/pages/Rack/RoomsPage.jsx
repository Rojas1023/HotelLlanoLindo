// pages/Rack/RoomsPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoomsPage.css';

const generarHabitaciones = () => {
  const rooms = [];
  const pisos = {
    1: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111],
    2: Array.from({ length: 13 }, (_, i) => 201 + i),
    3: Array.from({ length: 12 }, (_, i) => 301 + i)
  };
  Object.values(pisos).forEach(arr => rooms.push(...arr));
  return rooms;
};

const RoomsPage = () => {
  const habitaciones = generarHabitaciones();
  const navigate = useNavigate();

  const ocupadas = JSON.parse(localStorage.getItem('huespedes')) || [];

  return (
    <div className="rack-container">
      <h1>RACK DE HABITACIONES</h1>
      <div className="rack-grid">
        {habitaciones.map(numero => {
          const ocupada = ocupadas.some(h => h.habitacion === numero);
          return (
            <button
              key={numero}
              className={`room-btn ${ocupada ? 'ocupada' : 'libre'}`}
              onClick={() => navigate(`/habitacion/${numero}`)}
            >
              {numero}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RoomsPage;
