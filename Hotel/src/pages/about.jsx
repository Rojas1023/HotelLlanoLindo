import React, { useState } from 'react';
import './about.css';

const Usuarios = () => {
  // Función para generar ID aleatorio
  const generarIdAleatorio = () => {
    return Math.floor(Math.random() * 1000000); // Genera un número entre 0 y 999999
  };

  // Datos iniciales con IDs aleatorios
  const [usuarios, setUsuarios] = useState([
    { id: generarIdAleatorio(), nombre: 'Admin', rol: 'Administrador', usuario: 'admin', contraseña: 'admin123' },
    { id: generarIdAleatorio(), nombre: 'Recepción', rol: 'Empleado', usuario: 'recepcion', contraseña: 'recepcion123' },
  ]);

  // Estado para controlar qué contraseñas se muestran
  const [mostrarContraseñas, setMostrarContraseñas] = useState({});

  // Estado del formulario (sin ID inicial)
  const [formData, setFormData] = useState({
    nombre: '',
    rol: '',
    usuario: '',
    contraseña: ''
  });

  const [editandoId, setEditandoId] = useState(null);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Guardar usuario (crear o actualizar)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editandoId) {
      setUsuarios(usuarios.map(user => 
        user.id === editandoId ? { ...formData, id: editandoId } : user
      ));
    } else {
      // Generar ID aleatorio solo al guardar
      setUsuarios([...usuarios, { ...formData, id: generarIdAleatorio() }]);
    }
    limpiarFormulario();
  };

  // Editar usuario existente
  const editarUsuario = (id) => {
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
      setFormData({
        nombre: usuario.nombre,
        rol: usuario.rol,
        usuario: usuario.usuario,
        contraseña: usuario.contraseña
      });
      setEditandoId(id);
    }
  };

  // Eliminar usuario
  const eliminarUsuario = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este usuario?')) {
      setUsuarios(usuarios.filter(user => user.id !== id));
      // Limpiar el estado de mostrar contraseña si existe
      const nuevasContraseñas = {...mostrarContraseñas};
      delete nuevasContraseñas[id];
      setMostrarContraseñas(nuevasContraseñas);
    }
  };

  // Mostrar/ocultar contraseña
  const toggleMostrarContraseña = (id) => {
    setMostrarContraseñas(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Limpiar formulario
  const limpiarFormulario = () => {
    setFormData({
      nombre: '',
      rol: '',
      usuario: '',
      contraseña: ''
    });
    setEditandoId(null);
  };

  return (
    <div className="usuarios-container">
      <div className="usuarios-header">
        <h1>USUARIOS</h1>
      
      </div>

      <div className="formulario-seccion">
        <h2>Crear usuario</h2>
        <form onSubmit={handleSubmit} className="formulario-usuario">
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                required
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                placeholder="Contraseña"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>ID</label>
              <input
                type="text"
                value={editandoId || 'Nuevo ID se generará al guardar'}
                disabled
                placeholder="ID"
              />
            </div>
            <div className="form-group">
              <label>Rol</label>
              <select
                name="rol"
                value={formData.rol}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar</option>
                <option value="Administrador">Administrador</option>
                <option value="Empleado">Recepcionista</option>
              </select>
            </div>
            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                placeholder="Usuario"
                required
              />
            </div>
          </div>
        </form>
      </div>

      <div className="acciones-seccion">
        <div className="acciones-botones">
          <button 
            type="submit" 
            onClick={handleSubmit}
            className="accion-boton crear"
          >
            {editandoId ? 'Actualizar' : 'Crear'}
          </button>
          <button 
            type="button" 
            onClick={limpiarFormulario}
            className="accion-boton limpiar"
          >
            Limpiar
          </button>
        </div>
      </div>

      <div className="tabla-seccion">
        <h2>ID</h2>
        <div className="tabla-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>ROL</th>
                <th>USUARIO</th>
                <th>CONTRASEÑA</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map(usuario => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.rol}</td>
                  <td>{usuario.usuario}</td>
                  <td>
                    {mostrarContraseñas[usuario.id] ? usuario.contraseña : '••••••••'}
                  </td>
                  <td>
                    <button 
                      onClick={() => toggleMostrarContraseña(usuario.id)}
                      className="accion-boton mostrar"
                    >
                      {mostrarContraseñas[usuario.id] ? 'Ocultar' : 'Mostrar'}
                    </button>
                    <button 
                      onClick={() => editarUsuario(usuario.id)}
                      className="accion-boton editar"
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => eliminarUsuario(usuario.id)}
                      className="accion-boton eliminar"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;