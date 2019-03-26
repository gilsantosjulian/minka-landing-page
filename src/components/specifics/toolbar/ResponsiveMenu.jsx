import React from 'react';
import { Box, Button } from 'grommet';

import MenuItem from 'components/generics/MenuItem';
import useComponentInViewPort from 'hooks/useComponentInViewPort';

export default ({ visibility, items, registerButtonLabel }) => {
  const componentInViewPort = useComponentInViewPort();

  const renderItem = (item) => {
    return <MenuItem
      border={componentInViewPort === item.id}
      key={item.id}
      text={item.text}
      id={item.id}
      color='light-1'
    />
  };

  const renderRegisterButton = () => {
    return (
      <Button
        primary
        label={registerButtonLabel}
        margin={'small'}
      />
    );
  };

  return (
    <Box
      width='100%'
      flex
      className={`responsive-menu-container ${visibility ? 'menu-opened' : ''}`}
      background='dark-2'
      align='center'
      justify='center'
      gap='small'>
      {items.map(renderItem)}
      {renderRegisterButton()}
    </Box>
  );
};