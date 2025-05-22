// pages/Rack/Habitacion.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Rack/Habitacion.css'; // Asegúrate de tener un archivo CSS para estilos

const Habitacion = () => {
  const { id } = useParams(); // Número de habitación
  const navigate = useNavigate();
  const [huesped, setHuesped] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    celular: '',
    tipoDoc: '',
    documento: '',
    fechaCheckIn: new Date().toISOString().split('T')[0],
    metodoPago: ''
  });

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem('huespedes')) || [];
    const info = datos.find(h => h.habitacion === parseInt(id));
    setHuesped(info || null);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckIn = () => {
    const nuevosDatos = [
      ...((JSON.parse(localStorage.getItem('huespedes')) || []).filter(h => h.habitacion !== parseInt(id))),
      { habitacion: parseInt(id), ...formData }
    ];
    localStorage.setItem('huespedes', JSON.stringify(nuevosDatos));
    navigate('/Rack/RoomsPage');
  };

  const handleCheckOut = () => {
    const nuevosDatos = (JSON.parse(localStorage.getItem('huespedes')) || []).filter(h => h.habitacion !== parseInt(id));
    localStorage.setItem('huespedes', JSON.stringify(nuevosDatos));
    alert(`Check-out realizado para la habitación ${id}`);
    navigate('/Rack/RoomsPage');
  };

  return (
    <div className="habitacion-container">
      <h2>Habitación {id}</h2>
      {!huesped ? (
        <>
          <h3>Check-In</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleCheckIn(); }}>
            <input name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleInputChange} required />
            <input name="celular" placeholder="Celular" value={formData.celular} onChange={handleInputChange} required />
            <select name="tipoDoc" value={formData.tipoDoc} onChange={handleInputChange} required>
              <option value="">Tipo de documento</option>
              <option value="CC">Cédula</option>
              <option value="TI">Tarjeta de identidad</option>
              <option value="CE">Cédula de extranjería</option>
            </select>
            <input name="documento" placeholder="Número de documento" value={formData.documento} onChange={handleInputChange} required />
            <input type="date" name="fechaCheckIn" value={formData.fechaCheckIn} onChange={handleInputChange} required />
            <button type="submit">Registrar Check-In</button>
          </form>
        </>
      ) : (
        <>
          <h3>Huésped Actual</h3>
          <p><strong>Nombre:</strong> {huesped.nombre}</p>
          <p><strong>Celular:</strong> {huesped.celular}</p>
          <p><strong>Documento:</strong> {huesped.tipoDoc} {huesped.documento}</p>
          <p><strong>Check-In:</strong> {huesped.fechaCheckIn}</p>
          <h4>Realizar Check-Out</h4>
          <select name="metodoPago" value={formData.metodoPago} onChange={handleInputChange} required>
            <option value="">Método de pago</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="transferencia">Transferencia</option>
          </select>
          <button onClick={handleCheckOut}>Confirmar Check-Out</button>
        </>
      )}
    </div>
  );
};

export default Habitacion;
