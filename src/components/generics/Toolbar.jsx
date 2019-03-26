import React, { useState } from 'react';
import { Box, Image, Button, ResponsiveContext } from 'grommet';

import UnresponsiveMenu from 'components/specifics/toolbar/UnresponsiveMenu';
import ResponsiveMenu from 'components/specifics/toolbar/ResponsiveMenu';
import MenuButton from 'components/specifics/toolbar/MenuButton';
import { TXT_10, TXT_11, TXT_12, TXT_13, TXT_14, TXT_15, TXT_16 } from 'assets/strings';

const styles = {
  container: {
    position: 'fixed',
    zIndex: 1,
  },
  menuButton: {
    position: 'absolute',
    top: '25%',
    right: '5%',
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

  const onMenuButtonPressed = (visibility) => {
    setReponsiveMenuVisibility(visibility);
  }
  
  const renderMenu = (size) => {
    if (size !== 'xsmall' &&
        size !== 'small' &&
        size !== 'medium')
      return (
        <Box
          width='60%'
          justify='center'
          align='center'>
          <UnresponsiveMenu
            items={ITEMS}
          />
        </Box>
      );

    return <ResponsiveMenu
      visibility={reponsiveMenuVisibility}
      items={ITEMS}
      registerButtonLabel={TXT_16}
    />;
  };

  const renderRegisterButton = (size) => {
    if (size !== 'xsmall' &&
        size !== 'small' &&
        size !== 'medium')
    return (
      <Box
        pad='medium'
        width='20%'
        justify='center'>
        <Button
          primary
          label={TXT_16}
        />
      </Box>
    );
  };

  const renderMenuButton = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium')
      return <MenuButton
        onMenuButtonPressed={onMenuButtonPressed}
      />;
  }

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            width='100%'
            height='xsmall'
            direction='row'
            elevation='xsmall'
            background='light-1'
            style={styles.container}>
            <Box
              width={ size === 'xsmall' || size === 'small' || size === 'medium' ? '100%' : '20%' }
              justify='center'
              align={ size === 'xsmall' || size === 'small' || size === 'medium' ? 'center' : 'end'} >
              <Image
                src={require('assets/images/logo.svg')}
              />
            </Box>
            {renderMenu(size)}
            {renderRegisterButton(size)}
            {renderMenuButton(size)}
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}