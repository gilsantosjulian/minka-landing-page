import React from 'react';
import { Heading, ResponsiveContext } from 'grommet';

export default ({ text }) => {

  const getMargin = (size) => {
    if (size === 'xsmall' ||
        size === 'small')
      return { top: 'xlarge', bottom: 'large' };
    if (size === 'medium' ||
        size === 'large')
      return { top: 'large', bottom: 'medium' };

    return { left: 'xlarge', top: 'medium' }
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
          <Heading
            level='1'
            size={size}
            margin={getMargin(size)}
            alignSelf={getAlignSelf(size)}
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
