import React from 'react';
import { Heading, ResponsiveContext } from 'grommet';

export default ({ text }) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Heading
            margin={{ left: size === 'xsmall' || size === 'small' ? 'none' : 'xlarge' }}
            alignSelf={size === 'xsmall' || size === 'small' ? 'center' : 'start'}
            color='dark-2'>
            <span className='title-underlined'>
              {text}
            </span>
          </Heading>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};
