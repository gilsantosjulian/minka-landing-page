import React, { useState } from 'react';
import { Box } from 'grommet';

import About from 'components/specifics/hackathon/About.jsx';
import Agenda from 'components/specifics/hackathon/Agenda.jsx';
import Challenges from 'components/specifics/hackathon/Challenges.jsx';
import Footer from 'components/generics/Footer.jsx';
import Home from 'components/specifics/hackathon/Home.jsx';
import Layer from 'components/specifics/hackathon/Layer.jsx';
import Mentors from 'components/specifics/hackathon/Mentors.jsx';
import Sponsors from 'components/specifics/hackathon/Sponsors.jsx';
import Toolbar from 'components/generics/Toolbar.jsx';
import Who from 'components/specifics/hackathon/Who.jsx';

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