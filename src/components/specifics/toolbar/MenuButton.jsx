import React, { useState } from 'react';
import { Button } from 'grommet';

export default ({ onMenuButtonPressed }) => {
  const [pressed, setPressed] = useState(false);

  const onClick = () => {
    onMenuButtonPressed(!pressed);
    setPressed(!pressed);
  };

  return (
    <Button
      id='menu-button'
      className={pressed ? 'menu-button-pressed' : ''}
      onClick={onClick}>
      <span className='line bg-primary'></span>
      <span className='line bg-primary'></span>
      <span className='line bg-primary'></span>
    </Button>
  );
}