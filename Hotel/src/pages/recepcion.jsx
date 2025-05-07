import React, { useState } from 'react';
import './recepcion.css';

const RecepcionPanel = () => {
  const [showCheckInForm, setShowCheckInForm] = useState(false);
  const [showCheckOutForm, setShowCheckOutForm] = useState(false);
  const [huespedesActivos, setHuespedesActivos] = useState([
    { id: 203, nombre: 'Juan Pérez', checkIn: '2023-10-25' },
    { id: 305, nombre: 'María Gómez', checkIn: '2023-10-26' },
    { id: 102, nombre: 'Carlos Rojas', checkIn: '2023-10-27' }
  ]);
  const [nuevoHuesped, setNuevoHuesped] = useState({
    nombre: '',
    habitacion: '',
    fechaCheckIn: new Date().toISOString().split('T')[0],
    metodoPago: ''
  });

  const handleCheckInClick = () => {
    setShowCheckInForm(true);
    setShowCheckOutForm(false);
  };

  const handleCheckOutClick = () => {
    setShowCheckOutForm(true);
    setShowCheckInForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoHuesped({ ...nuevoHuesped, [name]: value });
  };

  const submitCheckIn = (e) => {
    e.preventDefault();
    const nuevoId = Math.max(...huespedesActivos.map(h => h.id), 0) + 1;

    setHuespedesActivos([
      ...huespedesActivos,
      {
        id: nuevoId,
        nombre: nuevoHuesped.nombre,
        checkIn: nuevoHuesped.fechaCheckIn
      }
    ]);

    setNuevoHuesped({
      nombre: '',
      habitacion: '',
      fechaCheckIn: new Date().toISOString().split('T')[0],
      metodoPago: ''
    });
    setShowCheckInForm(false);
  };

  const submitCheckOut = (e) => {
    e.preventDefault();
    const habitacion = nuevoHuesped.habitacion;

    const actualizados = huespedesActivos.filter(h => h.id.toString() !== habitacion);
    setHuespedesActivos(actualizados);

    alert(`Check-out realizado para habitación ${habitacion}`);
    setNuevoHuesped({
      nombre: '',
      habitacion: '',
      fechaCheckIn: new Date().toISOString().split('T')[0],
      metodoPago: ''
    });
    setShowCheckOutForm(false);
  };

  return (
    <div className="panel-container">
      <div className="panel-header">
        <h1>PANEL DE RECEPCIÓN</h1>
        <div className="user-info">
        </div>
      </div>

      <div className="section">
        <h2>ACCIONES RÁPIDAS</h2>
        <div className="quick-actions">
          <button className="action-btn primary" onClick={handleCheckInClick}>CHECK-IN</button>
          <button className="action-btn secondary" onClick={handleCheckOutClick}>CHECK-OUT</button>
        </div>

        {showCheckInForm && (
          <div className="form-container">
            <h3>NUEVO CHECK-IN</h3>
            <form onSubmit={submitCheckIn}>
              <div className="form-row">
                <div className="form-group">
                  <label>Nombre del huésped:</label>
                  <input
                    type="text"
                    name="nombre"
                    value={nuevoHuesped.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Número de habitación (ID):</label>
                  <input
                    type="text"
                    name="habitacion"
                    value={nuevoHuesped.habitacion}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Fecha de check-in:</label>
                  <input
                    type="date"
                    name="fechaCheckIn"
                    value={nuevoHuesped.fechaCheckIn}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-buttons">
                <button type="submit" className="action-btn primary">CONFIRMAR CHECK-IN</button>
                <button type="button" className="action-btn cancel" onClick={() => setShowCheckInForm(false)}>CANCELAR</button>
              </div>
            </form>
          </div>
        )}

        {showCheckOutForm && (
          <div className="form-container">
            <h3>PROCESAR CHECK-OUT</h3>
            <form onSubmit={submitCheckOut}>
              <div className="form-row">
                <div className="form-group">
                  <label>Número de habitación (ID):</label>
                  <input
                    type="text"
                    name="habitacion"
                    value={nuevoHuesped.habitacion}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Método de pago:</label>
                  <select
                    name="metodoPago"
                    value={nuevoHuesped.metodoPago}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Seleccionar...</option>
                    <option value="efectivo">Efectivo</option>
                    <option value="tarjeta">Tarjeta de crédito</option>
                    <option value="transferencia">Transferencia</option>
                  </select>
                </div>
              </div>
              <div className="form-buttons">
                <button type="submit" className="action-btn secondary">PROCESAR CHECK-OUT</button>
                <button type="button" className="action-btn cancel" onClick={() => setShowCheckOutForm(false)}>CANCELAR</button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="section">
        <h2>HUESPEDES ACTIVOS</h2>
        <table className="active-guests-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Fecha Check-In</th>
            </tr>
          </thead>
          <tbody>
            {huespedesActivos.map(h => (
              <tr key={h.id}>
                <td>{h.id}</td>
                <td>{h.nombre}</td>
                <td>{h.checkIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecepcionPanel;
