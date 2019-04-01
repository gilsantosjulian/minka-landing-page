import React, { useState } from 'react';
import { Box } from 'grommet';

import Logo from 'components/specifics/toolbar/Logo';
import UnresponsiveMenu from 'components/specifics/toolbar/UnresponsiveMenu';
import RegisterButton from 'components/specifics/toolbar/RegisterButton';
import ResponsiveMenu from 'components/specifics/toolbar/ResponsiveMenu';
import MenuButton from 'components/specifics/toolbar/MenuButton';
import { TXT_10, TXT_11, TXT_12, TXT_13, TXT_14, TXT_15, TXT_16 } from 'assets/strings';

import PubSub from 'services/pubSub.js';

const styles = {
  container: {
    position: 'fixed',
    zIndex: 1,
  },
};

const ITEMS = [
  {
    id: 'home',
    text: TXT_10,
  },
  {
    id: 'about',
    text: TXT_11,
  },
  {
    id: 'who',
    text: TXT_12,
  },
  {
    id: 'challenges',
    text: TXT_13,
  },
  {
    id: 'mentors',
    text: TXT_14,
  },
  {
    id: 'agenda',
    text: TXT_15,
  },
];

export default () => {
  const [reponsiveMenuVisibility, setReponsiveMenuVisibility] = useState(false);

  PubSub.getInstance().on('onReponsiveMenuVisibility', () => {
    setReponsiveMenuVisibility(!reponsiveMenuVisibility);
  })

  const onMenuButtonPressed = (visibility) => {
    setReponsiveMenuVisibility(visibility);
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
        items={ITEMS}
      />
      <RegisterButton
        text={TXT_16}
      />
      <ResponsiveMenu
        visibility={reponsiveMenuVisibility}
        items={ITEMS}
        registerButtonLabel={TXT_16}
      />
      <MenuButton
        onMenuButtonPressed={onMenuButtonPressed}
      />
    </Box>
  );
}