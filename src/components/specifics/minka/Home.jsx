import React, { useState } from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';

import LeftSide from 'components/specifics/home/LeftSide';
import RightSide from 'components/specifics/home/RightSide';
import { TXT_1, TXT_2, TXT_3, TXT_4, TXT_5, TXT_6, TXT_7, TXT_8, TXT_9 } from 'assets/strings';

const styles = {
  container: {
    position: 'relative',
  },
};

const ID = 'home';

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
      width: size === 'xsmall' || size === 'small'  || size === 'medium' ? '95%' : '150%',
      height: size === 'xsmall' || size === 'small'  || size === 'medium' ? '95%' : '150%',
      right: size === 'xsmall' || size === 'small'  || size === 'medium' ? '0%' : '-40%',
      top: size === 'xsmall' ? '35%' : size === 'small'  || size === 'medium' ? '28%'  : '-30%',
    }
  }
  
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            id={ID}
            style={styles.container}
            direction={size === 'small' || size === 'xsmall' || size === 'medium' ? 'column' : 'row'}
            onMouseMove={onMouseMove}
            overflow='hidden'>
            <LeftSide
              width={size === 'small' || size === 'xsmall' || size === 'medium' ? '100%' : '40%'}
              texts={[
                TXT_1,
                TXT_2,
                TXT_3,
                TXT_4,
                TXT_5,
                TXT_6,
                TXT_7,
                TXT_8,
                TXT_9,
              ]}
            />
            <RightSide
              width={size === 'small' || size === 'xsmall' || size === 'medium' ? '100%' : '60%'}
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