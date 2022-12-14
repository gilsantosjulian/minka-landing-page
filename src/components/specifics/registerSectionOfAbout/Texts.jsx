import React from 'react';
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet';

export default ({ texts }) => {

  const getWidht = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return '100%';

    return '50%';
  };

  const getAlignSelf = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return 'center';

    return 'start';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            width={getWidht(size)}>
            <Heading
              alignSelf={getAlignSelf(size)}
              size={size}
              level='3'
              color='accent-2'
              margin={{ bottom: 'medium' }}>
              {texts[0]}
            </Heading>
            <Paragraph
              size={size}>
              {texts[1]}
            </Paragraph>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};