import React from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';

import LeftSideOfHome from 'components/specifics/home/LeftSideOfHome';
import RightSideOfHome from 'components/specifics/home/RightSideOfHome';
import { TXT_1, TXT_2, TXT_3, TXT_4, TXT_5, TXT_6, TXT_7, TXT_8, TXT_9 } from 'assets/strings';
import useMouseMovementEffect from 'hooks/useMouseMovementEffect';

const styles = {
  container: {
    position: 'relative',
    minHeight: '80vh',
    height: 'auto',
  },
};

const ID = 'home';

export default () => {
  const[x, y, onMouseMove] = useMouseMovementEffect();

  const getLeft = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return '0%';

    return '25%';
  };

  const getTop = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return '25%';

    return '0%';
  };

  const getStyleOfHackermanBackground = (size) => {
    const translate = `translate(${x}px, ${y}px) scale(1)`;
    
    return {
      transform: translate,
      zIndex: -1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: getTop(size),
      left: getLeft(size),
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