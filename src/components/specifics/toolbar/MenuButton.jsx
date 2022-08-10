import React, { useState } from 'react';
import { Button, ResponsiveContext } from 'grommet';

import PubSub from 'services/pubSub.js';

export default ({ onMenuButtonPressed }) => {
  const [pressed, setPressed] = useState(false);

  PubSub.getInstance().on('onReponsiveMenuVisibility', () => {
    setPressed(!pressed);
  })

  const onClick = () => {
    onMenuButtonPressed(!pressed);
    setPressed(!pressed);
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
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
      }}
    </ResponsiveContext.Consumer>
  );
}