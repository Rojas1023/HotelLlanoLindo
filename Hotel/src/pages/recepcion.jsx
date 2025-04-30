import React from 'react';
import { useNavigate } from 'react-router-dom';
import './recepcion.css'; 

const Recepcion = () => {
  const navigate = useNavigate();

  // Datos de ejemplo (huéspedes activos)
  const huespedesActivos = [
    { id: 101, nombre: 'Juan Pérez', habitacion: '203', checkIn: '2023-10-25' },
    { id: 102, nombre: 'María Gómez', habitacion: '305', checkIn: '2023-10-26' },
    { id: 103, nombre: 'Carlos Rojas', habitacion: '102', checkIn: '2023-10-27' },
  ];

  return (
    <div className="recepcion-container">
      {/* Barra superior con título y botón de salir */}
      <header className="recepcion-header">
        <h1>Panel de Recepción</h1>
        <button 
          className="btn-salir"
          onClick={() => navigate('/')}
        >
          Cerrar Sesión
        </button>
      </header>

      {/* Sección de acciones rápidas */}
      <div className="acciones-rapidas">
        <h2>Acciones Rápidas</h2>
        <div className="botones-acciones">
          <button 
            className="btn-accion"
            onClick={() => navigate('/checkin')} // Ajusta la ruta según tu app
          >
            Check-In
          </button>
          <button 
            className="btn-accion"
            onClick={() => navigate('/checkout')}
          >
            Check-Out
          </button>
          <button 
            className="btn-accion"
            onClick={() => navigate('/reservas')}
          >
            Reservas
          </button>
        </div>
      </div>

      {/* Lista de huéspedes activos */}
      <div className="huespedes-activos">
        <h2>Huéspedes Activos</h2>
        <table className="tabla-huespedes">
          <thead>
            <tr>
              <th>Habitación</th>
              <th>Nombre</th>
              <th>Check-In</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {huespedesActivos.map((huesped) => (
              <tr key={huesped.id}>
                <td>{huesped.habitacion}</td>
                <td>{huesped.nombre}</td>
                <td>{huesped.checkIn}</td>
                <td>
                  <button className="btn-detalle">Ver Detalle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mensaje de bienvenida o notificaciones */}
      <div className="notificaciones">
        <p>Bienvenido/a, <strong>Usuario Recepcionista</strong>. Hoy es {new Date().toLocaleDateString()}.</p>
      </div>
    </div>
  );
};

export default Recepcion;