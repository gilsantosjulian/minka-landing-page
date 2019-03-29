import React from 'react';
import { Box, Image, Paragraph, ResponsiveContext } from 'grommet';

import {
  TXT_92,
  TXT_93,
  TXT_94,
} from 'assets/strings';

const styles = {
  paragraph: {
    fontSize: 16,
  },
};

export default () => {

  const renderLogo = (size) => {
    if (size !== 'xsmall' &&
        size !== 'small')
    return (
      <Image
        src={require('assets/images/minka-simbol.svg')}
      />
    );
  }

  const getDirection = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium')
      return 'column';
  
    return 'row';
  };

  const getHeight = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium')
      return '180px';
  
    return 'xsmall';
  };

  const getJustify = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium')
      return 'start';
  
    return 'around';
  };
  
  const getFill = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium')
      return 'horizontal';
  
    return false;
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            pad='small'
            height={getHeight(size)}
            direction={getDirection(size)}
            background='light-1'
            justify={getJustify(size)}
            gap='medium'>
            <Box
              fill={getFill(size)}
              direction='row'
              align='center'
              justify='center'
              gap='small'>
              {renderLogo(size)}
              <Paragraph
                textAlign='center'
                style={styles.paragraph}>
                {TXT_92}
              </Paragraph>
            </Box>
            <Box
              fill={getFill(size)}
              direction='row'
              align='center'
              justify='center'
              gap='xsmall'>
              <Paragraph
                style={styles.paragraph}>
                {TXT_93}
              </Paragraph>
              <Image
                src={require('assets/images/heart-minka.svg')}
              />
              <Paragraph
                style={styles.paragraph}>
                {TXT_94 + ' '}
              </Paragraph>
              <Image
                src={require('assets/images/branko.svg')}
              />
            </Box>
        </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}