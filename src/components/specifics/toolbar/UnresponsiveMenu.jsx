import React from 'react';
import { Box } from 'grommet';

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
    <Box
      direction='row'
      gap='medium'>
      {items.map(renderItem)}
    </Box>
  );
}