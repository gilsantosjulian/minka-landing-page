import React, { useState } from 'react';
import { Box } from 'grommet';

import Toolbar from 'components/generics/Toolbar.jsx';
import Home from 'components/specifics/minka/Home.jsx';
import About from 'components/specifics/minka/About.jsx';
import Who from 'components/specifics/minka/Who.jsx';
import Challenges from 'components/specifics/minka/Challenges.jsx';
import Mentors from 'components/specifics/minka/Mentors.jsx';
import Layer from 'components/specifics/minka/Layer.jsx';

import PubSub from 'services/pubSub.js';

export default () => {
  const [visibility, setVisibility] = useState(false);

  PubSub.getInstance().on('onVisibilityChange', () => {
    setVisibility(!visibility);
  })

  return (
    <Box>
      <Box height='xsmall' />
      <Toolbar />
      <Layer visibility={visibility} />
      <Home />
      <About />
      <Who />
      <Challenges />
      <Mentors />
    </Box>
  );
};