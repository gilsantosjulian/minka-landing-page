import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import CardOfServices from 'components/specifics/cardsOfServices/CardOfServices';

export default ({
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
  fifthTitle,
  sixthTitle,
  firstText,
  secondText,
  thirdText,
  fourthText,
  fifthText,
  sixthText,
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
          <>
          <Box
            direction={getDirection(size)}
            align={getAlign(size)}
            pad='medium'
            gap='medium'
            justify='center'>
            <CardOfServices
              image={firstImage}
              title={firstTitle}
              text={firstText}
            />
            <CardOfServices
              image={secondImage}
              title={secondTitle}
              text={secondText}
            />
            <CardOfServices
              image={thirdImage}
              title={thirdTitle}
              text={thirdText}
            />
          </Box>
          <Box
            direction={getDirection(size)}
            align={getAlign(size)}
            pad='medium'
            gap='medium'
            justify='center'>
            <CardOfServices
              image={fourthImage}
              title={fourthTitle}
              text={fourthText}
            />
            <CardOfServices
              image={fifthImage}
              title={fifthTitle}
              text={fifthText}
            />
            <CardOfServices
              image={sixthImage}
              title={sixthTitle}
              text={sixthText}
            />
          </Box>
          </>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}