import React from 'react';
import { Box } from 'grommet';

import Toolbar from 'components/generics/Toolbar.jsx';
import Home from 'components/specifics/minka/Home.jsx';
import About from 'components/specifics/minka/About.jsx';

export default () => {

  return (
    <Box>
      <Box height='xsmall' />
      <Toolbar />
      <Home />
      <About />
    </Box>
  );
};