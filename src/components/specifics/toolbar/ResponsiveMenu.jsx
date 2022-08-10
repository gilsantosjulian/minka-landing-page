import React from 'react';
import { Box, Button } from 'grommet';

import MenuItem from 'components/generics/MenuItem';
import useComponentInViewPort from 'hooks/useComponentInViewPort';

import PubSub from 'services/pubSub.js';

export default ({ visibility, items, buttonLabel, withButton }) => {
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

  const renderButton = () => {
    if (withButton)
      return (
        <Button
          primary
          label={buttonLabel}
          margin={'small'}
          onClick={() => PubSub.getInstance().emit('onVisibilityChange')}
        />
      );
  }

  return (
    <Box
      width='100%'
      className={`responsive-menu-container ${visibility ? 'menu-opened' : ''}`}
      background='dark-2'
      align='center'
      justify='center'
      gap='small'>
      {items.map(renderItem)}
      {renderButton()}
    </Box>
  );
};