// // Rack.jsx
// import React from 'react';
// import RoomButton from './RoomButton'; // asegúrate de que el path sea correcto

// const mockRooms = [
//   { number: 101, status: 'Libre' },
//   { number: 102, status: 'Ocupado' },
//   { number: 103, status: 'En Limpieza' },
//   { number: 201, status: 'Libre' },
//   { number: 202, status: 'Fuera de servicio' },
//   { number: 303, status: 'Ocupado' },
// ];

// const Rack = () => {
//   const handleRoomClick = (room) => {
//     console.log('Clicked room:', room);
//     // Aquí en el futuro podrías abrir un modal o enviar a una ruta de detalle
//   };

//   return (
//     <div className="grid grid-cols-5 gap-4 p-6">
//       {mockRooms.map((room) => (
//         <RoomButton
//           key={room.number}
//           number={room.number}
//           status={room.status}
//           image="/room-icon.png" // usa la ruta de tu imagen o ícono
//           onClick={() => handleRoomClick(room)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Rack;