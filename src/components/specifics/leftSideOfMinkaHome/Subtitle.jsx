import React from 'react';
import { Heading, ResponsiveContext } from 'grommet';

import Typing from 'components/specifics/subtitle/Typing';

const styles = {
  container: {
    lineHeight: '60px',
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

export default ({ texts }) => {

  const renderTyping = () => {
    if (texts[1])
      return (
        <Typing
          texts={texts[1]}
          styles={[
            styles.lightBlue,
            styles.yellow,
            styles.blue,
          ]}
        />
      );
  }

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Heading
            level='1'
            size={size}
            color='dark-2'
            style={styles.container}
            margin={{ left: 'xlarge', right: 'large' }}>
            {texts[0] ? texts[0] + ' ' : ''}
            {renderTyping()}
          </Heading>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};