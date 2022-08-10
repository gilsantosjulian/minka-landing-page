import React, { useState } from "react";
import { Box } from "grommet";

import Logo from "components/specifics/toolbar/Logo";
import UnresponsiveMenu from "components/specifics/toolbar/UnresponsiveMenu";
import MenuButton from "components/specifics/toolbar/MenuButton";

const styles = {
  container: {
    position: "fixed",
    zIndex: 2
  }
};

export default ({ items }) => {
  const [setReponsiveMenuVisibility] = useState(false);

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
      <MenuButton onMenuButtonPressed={onMenuButtonPressed} />
    </Box>
  );
};
