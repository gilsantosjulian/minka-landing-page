import React from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';

import LeftSideOfMinkaHome from 'components/specifics/minkaHome/LeftSideOfMinkaHome';
import RightSideOfMinkaHome from 'components/specifics/minkaHome/RightSideOfMinkaHome';
import useMouseMovementEffect from 'hooks/useMouseMovementEffect';
import useGetDataFromFirestore from 'hooks/useGetDataFromFirestore';

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
  },
};

const ID = 'home';

export default () => {
  const [x, y, onMouseMove] = useMouseMovementEffect();
  const texts = useGetDataFromFirestore('en', 'home');

  const getWidthAndHeight = (size) => {
    if (size === 'xsmall')
      return '100%';

    if (size === 'small')
      return '80%';

    if (size === 'medium' ||
        size === 'large')
      return '90%';

    return '100%';
  };

  const getRight = (size) => {
    if (size === 'xsmall')
      return '0%';
    if (size === 'small')
      return '10%';
    if (size === 'medium' ||
        size === 'large')
      return '5%';

    return '-20%';
  };

  const getTop = (size) => {
    if (size === 'xsmall')
        return '18%';

    if (size === 'small')
        return '25%';
    
    if (size === 'medium' ||
        size === 'large')
      return '15%';

    return '-5%';
  };

  const getStyleOfBackground = (size) => {
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
            <LeftSideOfMinkaHome
              texts={[
                texts.txt1,
                texts.txt2,
                texts.txt3,
              ]}
            />
            <RightSideOfMinkaHome
              hackerman={require('assets/images/minka-home-two-guys.svg')}
            />
            <Image
              src={require('assets/images/minka-home-background.svg')}
              style={getStyleOfBackground(size)}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};