import React from 'react';
import { Box, Text, Paragraph, Anchor, ResponsiveContext } from 'grommet';

export default ({ image, texts }) => {

  const getWidth = (size) => {
    if (size === 'xsmall' ||
      size === 'small')
      return '65%';
    if (size === 'medium' ||
      size === 'large')
      return '45%';

    return '25%';
  }

  const getMargin = (size) => {
    if (size === 'xsmall' ||
      size === 'small')
      return 'medium';

    return 'none';
  }

  const getPad = (size) => {
    if (size === 'xsmall')
      return 'none';

    return 'medium';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            width={getWidth(size)}
            margin={getMargin(size)}
            elevation='small'
            round='small'
            align='center'
            justify='center'
            pad={getPad(size)}>
            <Box
              pad='small'>
              <object
                type='image/svg+xml'
                data={image}>
                Your browser does not support svg
              </object>
            </Box>
            <Box
              align='center'
              style={{ minHeight: '50%' }}
            >
              <Text
                size={size}
                margin='small'
                color='dark-2'
                textAlign='center'>
                {texts[0]}
              </Text>
              <Paragraph
                size={size}
                style={{ minHeight: '50%' }}
                color='dark-2'
                textAlign='center'
                alignSelf='center'
              >
                {texts[1]}
              </Paragraph>
              <Anchor
                margin={{ vertical: 'small' }}
                label={<Paragraph color='accent-2'>{texts[2]}</Paragraph>}
                href={texts[3]}
              />
            </Box>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};