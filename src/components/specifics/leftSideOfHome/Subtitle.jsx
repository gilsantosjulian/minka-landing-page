import React from 'react';
import { Heading, ResponsiveContext } from 'grommet';

import Typing from 'components/specifics/subtitle/Typing';

const styles = {
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
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Heading
            level='3'
            size={size}
            color='dark-2'
            style={styles.descriptionContainer}
            margin={{ left: 'xlarge', right: 'large' }}>
            {texts[0]}
            <Typing
              texts={texts[1]}
              styles={[
                styles.lightBlue,
                styles.yellow,
                styles.blue,
              ]}
            />
            <br/>
            <span>
              {texts[2]}
            </span>
          </Heading>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};