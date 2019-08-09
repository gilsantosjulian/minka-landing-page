import React, { useState } from "react";
import { Box } from "grommet";

import Logo from "components/specifics/toolbar/Logo";
import UnresponsiveMenu from "components/specifics/toolbar/UnresponsiveMenu";
import RegisterButton from "components/specifics/toolbar/RegisterButton";
import ResponsiveMenu from "components/specifics/toolbar/ResponsiveMenu";
import MenuButton from "components/specifics/toolbar/MenuButton";

const styles = {
  container: {
    position: "fixed",
    zIndex: 2
  }
};

export default ({ items, withButton, buttonLabel }) => {
  const [reponsiveMenuVisibility, setReponsiveMenuVisibility] = useState(false);

  const onMenuButtonPressed = visibility => {
    setReponsiveMenuVisibility(visibility);
  };

  return (
    <Box
      width="100%"
      height="xsmall"
      direction="row"
      elevation="xsmall"
      background="light-1"
      style={styles.container}
    >
      <Logo />
      <UnresponsiveMenu items={items} />
      <ResponsiveMenu
        withButton={withButton}
        visibility={reponsiveMenuVisibility}
        items={items}
        registerButtonLabel={buttonLabel}
      />
      <MenuButton onMenuButtonPressed={onMenuButtonPressed} />
    </Box>
  );
};
