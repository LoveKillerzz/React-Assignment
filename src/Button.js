import React, { useState } from 'react';
import './Button.css';

function Button() 
{
  const [message, setMessage] = useState('');

  const handleClick = () => 
  {
    setMessage('Well done, you pushed the button! Thank you for your time, BYE BYE!');
  };

  return (
    <div>
      <button onClick={handleClick}>Push me!</button>
      <p>{message}</p>
    </div>
  );
}

export default Button;
