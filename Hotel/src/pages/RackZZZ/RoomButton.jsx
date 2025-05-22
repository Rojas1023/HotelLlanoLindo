import React from 'react';
import './RoomButton.css';

// const statusClassMap = {
//   'Libre': 'status-libre',
//   'Ocupado': 'status-ocupado',
//   'Fuera de servicio': 'status-fuera',
//   'En Limpieza': 'status-limpieza',
//   'Deuda': 'status-deuda',
// };

const RoomButton = ({ number, status, onClick }) => {
//   const buttonClass = `room-button ${statusClassMap[status] || ''}`;
  const imageSrc = `/${status}.png`;

  return (
    <button onClick={onClick} className="room-button button-status">
      <img src={imageSrc} alt={`Estado ${status}`} className="room-image" />
      <div className='room-info'>
      <span className="room-number">{number}</span>
      </div>
    </button>
  );
};

export default RoomButton;
