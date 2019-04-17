import React, { useState } from 'react';
import { Box } from 'grommet';

import About from 'components/specifics/minka/About.jsx';
import Agenda from 'components/specifics/minka/Agenda.jsx';
import Challenges from 'components/specifics/minka/Challenges.jsx';
import Footer from 'components/generics/Footer.jsx';
import Home from 'components/specifics/minka/Home.jsx';
import Layer from 'components/specifics/minka/Layer.jsx';
import Mentors from 'components/specifics/minka/Mentors.jsx';
import Sponsors from 'components/specifics/minka/Sponsors.jsx';
import Toolbar from 'components/generics/Toolbar.jsx';
import Who from 'components/specifics/minka/Who.jsx';

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
      <Agenda />
      <Sponsors />
      <Footer />
    </Box>
  );
};