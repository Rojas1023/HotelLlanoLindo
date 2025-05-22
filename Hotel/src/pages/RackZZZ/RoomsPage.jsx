import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoomButton from './RoomButton';
import './RoomGrid.css';

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

const RoomRack = () => {
  const navigate = useNavigate();

  const handleRoomClick = (room) => {
    // Ejemplo: navega a check-in o check-out según el estado
    if (room.status === 'Libre') {
      navigate(`/checkin/${room.number}`);
    } else if (room.status === 'Ocupado') {
      navigate(`/checkout/${room.number}`);
    } else {
      alert('Esta habitación no está disponible para check-in/check-out');
    }
  };

  // ...agrupación por pisos...

// Agrupa habitaciones por piso
const floors = {};
rooms.forEach(room => {
  const floor = Math.floor(room.number / 100);
  if (!floors[floor]) floors[floor] = [];
  floors[floor].push(room);
});
const orderedFloors = Object.values(floors).sort((a, b) => a[0].number - b[0].number);



  return (
    <div className="room-rack">
      {orderedFloors.map((floorRooms, idx) => (
        <div key={idx} className="room-floor">
          {floorRooms.map((room) => (
            <RoomButton
              key={room.number}
              number={room.number}
              status={room.status}
              onClick={() => handleRoomClick(room)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default RoomRack;