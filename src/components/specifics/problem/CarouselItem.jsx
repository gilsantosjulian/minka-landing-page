import React from 'react';
import { Box, Paragraph, Image, ResponsiveContext } from 'grommet';

import TitleUnderlined from 'components/generics/TitleUnderlined';
import useMouseMovementEffect from 'hooks/useMouseMovementEffect';

const styles = {
  container: {
    zIndex: 1,
  },
};

export default ({ title, description, options = [], image, background }) => {
  const[x, y, onMouseMove] = useMouseMovementEffect();

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
      return '0%';

    return '-25%';
  };

  const getTop = (size) => {
    if (size === 'xsmall')
        return '33%';

    if (size === 'small')
        return '38%';
    
    if (size === 'medium' ||
        size === 'large')
      return '28%';

    return '0%';
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

  const renderOption = (size) => (option, index) => {
    return (
      <Paragraph
        size={size}
        key={index}
        color='dark-2'
        margin={{ top: 'medium' }}>
        {option}
      </Paragraph>
    );
  }

  const getDirection = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return 'column';
    
    return 'row';
  }

  const getJustify = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return 'around';
    
    return 'start';
  }

  return (
    <ResponsiveContext.Consumer>
    {(size) => {
      return (
        <Box
          onMouseMove={onMouseMove}
          style={styles.container}
          direction={getDirection(size)}
          justify={getJustify(size)}
          align={'center'}>
          <Box>
            <TitleUnderlined
              text={title}
            />
            <Box
              margin={{ left: 'xlarge', top: 'medium', right: 'large' }}>
              <Paragraph
                size={size}
                color='dark-2'>
                {description}
              </Paragraph>
              {options.map(renderOption(size))}
            </Box>
          </Box>
          <Box
            width='100%'>
            <Image
              src={image}
            />
            <Image
              style={getStyleOfBackground(size)}
              src={background}
            />
          </Box>
        </Box>
      );
    }}
    </ResponsiveContext.Consumer>
  );
};