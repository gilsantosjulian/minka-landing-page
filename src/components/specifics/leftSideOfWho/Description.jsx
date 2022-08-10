import React from 'react';
import { Box, Text, Paragraph, ResponsiveContext } from 'grommet';

export default ({ texts }) => {
  
  const getMargin = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return{ horizontal: 'xlarge' }
      
    return { left: 'xlarge' };
  };

  const renderCategory = (text, size) => {
    return (
      <Text
        size={size}
        margin={{ vertical: 'small' }}
        color='dark-2'>
        {text}
      </Text>
    );
  };

  const renderRequirements = (size) => (item) => {
    return (
      <Paragraph
        size={size}
        key={item}
        color='dark-2'>
        {item}
      </Paragraph>
    );
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            margin={getMargin(size)}>
            {renderCategory(texts[0], size)}
            {texts.slice(1, 8).map(renderRequirements(size))}
            {renderCategory(texts[8], size)}
            {texts.slice(9, 11).map(renderRequirements(size))}
            {renderCategory(texts[11], size)}
            {texts.slice(12, 19).map(renderRequirements(size))}
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};