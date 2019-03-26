import React from 'react';
import { Box, Heading, Text, ResponsiveContext } from 'grommet'

export default ({ texts }) => {

  const renderCategory = (text) => {
    return (
      <Heading
        margin={{ vertical: 'small' }}
        level='4'
        color='dark-2'>
        {text}
      </Heading>
    );
  };

  const renderRequirements = (item) => {
    return <Text size='medium' key={item} color='dark-2'>{item}</Text>;
  };
 
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            flex>
            <Box
              margin={size === 'xsmall' || size === 'small' ? { vertical: 'large' } : { left: 'xlarge', top: 'medium' }}
              justify={size === 'xsmall' || size === 'small' ? 'center' : 'start' }
              direction='row'>
              <Heading
                level='2'
                color='dark-2'
                margin={{ right: 'xsmall' }}>
                {texts[0]}
              </Heading>
              <Heading
                level='2'
                color='accent-2'>
                {texts[1]}
              </Heading>
            </Box>
            <Box
              margin={size === 'xsmall' || size === 'small' ? { horizontal: 'small' } : { left: 'xlarge' }}>
              {renderCategory(texts[2])}
              {texts.slice(3, 10).map(renderRequirements)}
              {renderCategory(texts[10])}
              {texts.slice(11, 13).map(renderRequirements)}
              {renderCategory(texts[13])}
              {texts.slice(14, 21).map(renderRequirements)}
            </Box>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};