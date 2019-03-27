import React, { useState } from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';

import LeftSideOfHome from 'components/specifics/home/LeftSideOfHome';
import RightSideOfHome from 'components/specifics/home/RightSideOfHome';
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
  };

  const getWidthAndHeight = (size) => {
    if (size === 'xsmall')
      return '100%';

    if (size === 'small')
      return '80%';

    if (size === 'medium' ||
        size === 'large')
      return '90%';

    return '160%';
  };

  const getRight = (size) => {
    if (size === 'xsmall')
      return '0%';
    if (size === 'small')
      return '10%';
    if (size === 'medium' ||
        size === 'large')
      return '0%';

    return '-55%';
  };

  const getTop = (size) => {
    if (size === 'xsmall')
        return '33%';

    if (size === 'small')
        return '38%';
    
    if (size === 'medium' ||
        size === 'large')
      return '28%';

    return '-35%';
  };

  const getStyleOfHackermanBackground = (size) => {
    const translate = `translate(${x}px, ${y}px) scale(1)`;
    
    return {
      transform: translate,
      zIndex: -1,
      position: 'absolute',
      width: getWidthAndHeight(size),
      height: getWidthAndHeight(size),
      right: getRight(size),
      top: getTop(size),
    }
  };

  const getDirection = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return 'column';
    
    return 'row';
  };
  
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            id={ID}
            style={styles.container}
            direction={getDirection(size)}
            onMouseMove={onMouseMove}
            overflow='hidden'>
            <LeftSideOfHome
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
            <RightSideOfHome
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