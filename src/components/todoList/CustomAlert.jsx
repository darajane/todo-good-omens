import React from 'react';

const CustomAlert = ({ message, type, onClose }) => {
  return (
    <div className={`custom-alert ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default CustomAlert;