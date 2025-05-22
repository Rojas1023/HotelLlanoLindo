import React from 'react';
import RoomButton from './RoomButton';
import './RoomGrid.css'; // nuevo archivo

const rooms = [
    { number: 101, status: 'Libre' },
    { number: 102, status: 'Ocupado' },
    { number: 103, status: 'En Limpieza' },
    { number: 104, status: 'Fuera de servicio' },
    { number: 105, status: 'Deuda' },
    { number: 106, status: 'Libre' },
    { number: 107, status: 'Ocupado' },
    { number: 108, status: 'En Limpieza' },
    { number: 109, status: 'Fuera de servicio' },
    { number: 110, status: 'Deuda' },
    { number: 201, status: 'Libre' },
    { number: 202, status: 'Ocupado' },
    { number: 203, status: 'En Limpieza' },
    { number: 204, status: 'Fuera de servicio' },
    { number: 205, status: 'Deuda' },
    { number: 206, status: 'Libre' },
    { number: 207, status: 'Ocupado' },
    { number: 208, status: 'En Limpieza' },
    { number: 209, status: 'Fuera de servicio' },
    { number: 210, status: 'Deuda' },
    { number: 301, status: 'Libre' },
    { number: 302, status: 'Ocupado' },
    { number: 303, status: 'En Limpieza' },
    { number: 304, status: 'Fuera de servicio' },
    { number: 305, status: 'Deuda' },
    { number: 306, status: 'Libre' },
    { number: 307, status: 'Ocupado' },
    { number: 308, status: 'En Limpieza' },
    { number: 309, status: 'Fuera de servicio' },
    { number: 310, status: 'Deuda' },
  // agrega más habitaciones para ver el wrap
];

const RoomGrid = () => {
  return (
    <div className='room-grid-container'>
        <div className="room-grid">
      {rooms.map(room => (
        <RoomButton
          key={room.number}
          number={room.number}
          status={room.status}
          onClick={() => console.log(`Habitación ${room.number} Estado: ${room.status}`)}
        />
      ))}
    </div>
    </div>
    
    
  );
};

export default RoomGrid;
