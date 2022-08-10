import { useState } from 'react';

export default () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const friction = 1 / 30;

  const onMouseMove = (event) => {
    const mouseX = Math.max(-55, Math.min(100, window.innerWidth / 2 - event.clientX));
    const mouseY = Math.max(-55, Math.min(100, window.innerHeight / 2 - event.clientY));
    const followX = (50 * mouseX) / 100
    const followY = (50 * mouseY) / 100;

    setX( x + ((followX - x) * friction));
    setY(y + ((followY - y) * friction));
  };

  return [x, y, onMouseMove];
};