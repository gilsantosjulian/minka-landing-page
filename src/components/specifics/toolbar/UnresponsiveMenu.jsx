import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import MenuItem from 'components/generics/MenuItem';
import useComponentInViewPort from 'hooks/useComponentInViewPort';

export default ({ items }) => {
  const componentInViewPort = useComponentInViewPort();
  
  const renderItem = (item) => {
    return <MenuItem
      border={componentInViewPort === item.id}
      key={item.id}
      text={item.text}
      id={item.id}
    />
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        if (size !== 'xsmall' &&
            size !== 'small' &&
            size !== 'medium' &&
            size !== 'large')
          return (
            <Box
              width='60%'
              justify='center'
              align='center'
              direction='row'
              gap='medium'>
              {items.map(renderItem)}
            </Box>
          )
      }}
    </ResponsiveContext.Consumer>
  );
}