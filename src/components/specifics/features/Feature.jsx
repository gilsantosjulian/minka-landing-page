import React from 'react';
import { Box, Paragraph, Image, ResponsiveContext } from 'grommet';

import Title from 'components/generics/Title';


const styles = {
  container: {
    position: 'relative',
  },
};

export default ({ firstText, secondText, thirdText, image, background, reverse, x, y }) => {

  const getWidthAndHeight = (size) => {
    if (size === 'xsmall')
      return '110%';

    if (size === 'small')
      return '100%';

    if (size === 'medium' ||
        size === 'large')
      return '100%';

    return '110%';
  };

  const getRight = (size) => {
    if (size === 'xsmall')
      return '0%';
    if (size === 'small')
      return '0%';
    if (size === 'medium' ||
        size === 'large')
      return '0%';

    return reverse ? '25%' : '-37%';
  };

  const getTop = (size) => {
    if (size === 'xsmall')
        return '35%';

    if (size === 'small')
        return '35%';
    
    if (size === 'medium' ||
        size === 'large')
      return '30%';

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

  const renderText = (size) => {
    return (
      <Box
        width='100%'>
        <Title
          darkBlue
          textAlignCenter={isSmallDevice(size)}
          justify='start'
          textOne={firstText}
          textTwo={secondText}
        />
        <Paragraph
          size={size}
          textAlign={isSmallDevice(size) ? 'center' : 'start'}
          color='dark-2'
          margin={{ bottom: 'large' }}>
          {thirdText}
        </Paragraph>
      </Box>
    );
  };

  const renderImage = (size) => {
    return (
      <Box
        width='100%'>
        <Image
          src={image}
        />
        <Image
          src={background}
          style={getStyleOfBackground(size)}
        />
      </Box>
    );
  };

  const renderContent = (size) => {
    if (reverse && !isSmallDevice(size))
      return (
        <>
          {renderImage(size)}
          {renderText(size)}
        </>
      );

    return (
      <>
        {renderText(size)}
        {renderImage(size)}
      </>
    );
  };

  const isSmallDevice = (size) => {
    return size === 'xsmall' ||
    size === 'small' ||
    size === 'medium' ||
    size === 'large';
  };

  const getDirection = (size) => {
    if (isSmallDevice(size))
        return 'column';
    
    return 'row';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        console.log(size);
        
        return (
          <Box
            style={styles.container}
            reverse={reverse}
            direction={getDirection(size)}
            margin='xlarge'>
            {renderContent(size)}
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};