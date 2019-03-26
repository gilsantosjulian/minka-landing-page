import React from 'react';
import { Box, Paragraph } from 'grommet';

import TitleUnderlined from 'components/specifics/leftSide/TitleUnderlined';
import Typing from 'components/specifics/leftSide/Typing';
import Blockquote from 'components/specifics/leftSide/Blockquote';

const styles = {
  descriptionContainer: {
    fontWeight: 700,
    color: '#2E416D',
    fontSize: 22,
    display: 'inline-block',
  },
  fontWeight: {
    fontWeight: 700,
  },
  lightBlue: {
    color: '#5ABEEC',
  },
  yellow: {
    color: '#FFD16A',
  },
  blue: {
    color: '#4A8093',
  },
};

export default ({ texts, width }) => {
  return (
    <Box
      fill='vertical'
      width={width}
      gap='medium'
      justify='center'>
      <TitleUnderlined text={[texts[0]]} />
      <Box
        color='dark-2'
        size='large'
        style={styles.descriptionContainer}
        margin={{ right: 'xsmall', left: 'xlarge' }}>
        {texts[1]}
        <Typing
          texts={texts[2]}
          styles={[
            {...styles.fontWeight, ...styles.lightBlue},
            {...styles.fontWeight, ...styles.yellow},
            {...styles.fontWeight, ...styles.blue},
          ]}
        />
        <Paragraph
          color='dark-2'
          size='large'
          style={styles.fontWeight}
          margin={{ right: 'xsmall' }}>
          {texts[3]}
        </Paragraph>
      </Box>
      <Blockquote
        address={texts[4]}
        date={texts[5]}
        time={texts[6]}
        prize={texts[7]}
        bonus={texts[8]}
      />
    </Box>
  );
}