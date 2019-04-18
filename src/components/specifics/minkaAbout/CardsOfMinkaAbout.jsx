import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import CardOfAbout from 'components/specifics/cardsOfMinkaAbout/CardOfAbout';

export default ({
  firstImage,
  secondImage,
  thirdImage,
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  firstText,
  secondText,
  thirdText,
}) => {

  const getDirection = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return 'column';

    return 'row';    
  };

  const getAlign = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return 'center';
      
    return 'stretch';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            direction={getDirection(size)}
            align={getAlign(size)}
            pad='medium'
            gap='medium'
            justify='center'>
            <CardOfAbout
              image={firstImage}
              question={firstQuestion}
              text={firstText}
            />
            <CardOfAbout
              image={secondImage}
              question={secondQuestion}
              text={secondText}
            />
            <CardOfAbout
              image={thirdImage}
              question={thirdQuestion}
              text={thirdText}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}