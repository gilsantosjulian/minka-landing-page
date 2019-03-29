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

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            width='100%'
            height='xsmall'
            direction='row'
            background='light-1'
            justify='around'
            align='center'
            wrap>
            <Box
              direction={'row'}
              align='center'
              gap='small'>
              {renderLogo(size)}
              <Paragraph
                textAlign='center'
                style={styles.paragraph}>
                {TXT_92}
              </Paragraph>
            </Box>
            <Box
              direction='row'
              align='center'
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