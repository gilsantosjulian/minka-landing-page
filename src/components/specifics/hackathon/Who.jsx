import React from 'react';
import { Box, ResponsiveContext, Image } from 'grommet';

import LeftSideOfWho from 'components/specifics/who/LeftSideOfWho';
import RightSideOfWho from 'components/specifics/who/RightSideOfWho';
import useMouseMovementEffect from 'hooks/useMouseMovementEffect';
import {
  TXT_23,
  TXT_24,
  TXT_25,
  TXT_26,
  TXT_27,
  TXT_28,
  TXT_29,
  TXT_30,
  TXT_31,
  TXT_32,
  TXT_33,
  TXT_34,
  TXT_35,
  TXT_36,
  TXT_37,
  TXT_38,
  TXT_39,
  TXT_40,
  TXT_41,
  TXT_42,
} from 'assets/strings';

const styles = {
  container: {
    position: 'relative',
    minHeight: '80vh',
    height: 'auto',
  },
};

const ID = 'who';

export default () => {
  const [x, y, onMouseMove] = useMouseMovementEffect();

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
            overflow='hidden'
            style={styles.container}
            id={ID}
            direction={getDirection(size)}
            onMouseMove={onMouseMove}
            pad={{ bottom: 'medium' }}>
            <LeftSideOfWho
              texts={[
                TXT_23,
                TXT_24,
                TXT_25,
                TXT_26,
                TXT_27,
                TXT_28,
                TXT_29,
                TXT_30,
                TXT_31,
                TXT_32,
                TXT_33,
                TXT_34,
                TXT_35,
                TXT_36,
                TXT_37,
                TXT_38,
                TXT_39,
                TXT_40,
                TXT_41,
                TXT_42,
              ]}
            />
            <RightSideOfWho
              image={require('assets/images/paracaidas.svg')}
            />
            <Image
              src={require('assets/images/paracaidas-bg.svg')}
              style={getStyleOfHackermanBackground(size)}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};