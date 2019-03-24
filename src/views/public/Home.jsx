import React, { useState } from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';

import LeftSide from 'components/specifics/home/LeftSide';
import RightSide from 'components/specifics/home/RightSide';
import { TXT_1, TXT_2, TXT_3, TXT_4, TXT_5 } from 'assets/strings';

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
  }

  const getStyleOfHackermanBackground = (size) => {
    const translate = `translate(${x}px, ${y}px) scale(1)`;

    return {
      transform: translate,
      zIndex: -1,
      position: 'absolute',
      width: size === 'small' || size === 'xsmall' ? '100%' : '130%',
      height: size === 'small' || size === 'xsmall' ? '100%' : '130%',
      right: size === 'small' || size === 'xsmall' ? '0%' : '-30%',
      top: size === 'small' || size === 'xsmall' ? '25%' : '-10%',
    }
  }
  
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            fill
            direction={size === 'small' || size === 'xsmall' ? 'column' : 'row'}
            onMouseMove={onMouseMove}
            overflow='hidden'>
            <LeftSide
              width={size === 'small' || size === 'xsmall' ? '100%' : '40%'}
              texts={[
                TXT_1,
                TXT_2,
                TXT_3,
                TXT_4,
                TXT_5,
              ]}
            />
            <RightSide
              width={size === 'small' || size === 'xsmall' ? '100%' : '60%'}
              hackerman={require('assets/images/hackerman.svg')}
            />
            <Image
              src={require('assets/images/hackermanBackground.svg')}
              style={getStyleOfHackermanBackground(size)}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};