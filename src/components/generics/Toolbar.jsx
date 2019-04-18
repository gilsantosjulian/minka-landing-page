import React, { useState } from 'react';
import { Box } from 'grommet';

import Logo from 'components/specifics/toolbar/Logo';
import UnresponsiveMenu from 'components/specifics/toolbar/UnresponsiveMenu';
import RegisterButton from 'components/specifics/toolbar/RegisterButton';
import ResponsiveMenu from 'components/specifics/toolbar/ResponsiveMenu';
import MenuButton from 'components/specifics/toolbar/MenuButton';

import PubSub from 'services/pubSub.js';

const styles = {
  container: {
    position: 'fixed',
    zIndex: 1,
  },
};



export default ({ items, withButton, buttonLabel }) => {
  const [reponsiveMenuVisibility, setReponsiveMenuVisibility] = useState(false);

  PubSub.getInstance().on('onReponsiveMenuVisibility', () => {
    setReponsiveMenuVisibility(!reponsiveMenuVisibility);
  })

  const onMenuButtonPressed = (visibility) => {
    setReponsiveMenuVisibility(visibility);
  }

  const renderButton = () => {
    if (withButton)
      return (
        <RegisterButton
          text={buttonLabel}
        />
      );
  }

  return (
    <Box
      width='100%'
      height='xsmall'
      direction='row'
      elevation='xsmall'
      background='light-1'
      style={styles.container}>
      <Logo />
      <UnresponsiveMenu
        items={items}
      />
      {renderButton()}
      <ResponsiveMenu
        withButton={withButton}
        visibility={reponsiveMenuVisibility}
        items={items}
        registerButtonLabel={buttonLabel}
      />
      <MenuButton
        onMenuButtonPressed={onMenuButtonPressed}
      />
    </Box>
  );
}