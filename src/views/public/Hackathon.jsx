import React, { useState } from 'react';
import { Box } from 'grommet';

import About from 'components/specifics/hackathon/About.jsx';
import Agenda from 'components/specifics/hackathon/Agenda.jsx';
import Challenges from 'components/specifics/hackathon/Challenges.jsx';
import Footer from 'components/generics/Footer.jsx';
import Home from 'components/specifics/hackathon/Home.jsx';
import Layer from 'components/specifics/hackathon/Layer.jsx';
import Mentors from 'components/specifics/hackathon/Mentors.jsx';
import Sponsors from 'components/generics/Sponsors.jsx';
import Toolbar from 'components/generics/Toolbar.jsx';
import Who from 'components/specifics/hackathon/Who.jsx';

import { TXT_10, TXT_11, TXT_12, TXT_13, TXT_14, TXT_15, TXT_16 } from 'assets/strings';
import PubSub from 'services/pubSub.js';

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
  const [visibility, setVisibility] = useState(false);

  PubSub.getInstance().on('onVisibilityChange', () => {
    setVisibility(!visibility);
  })

  return (
    <Box>
      <Box height='xsmall' />
      <Toolbar
        withButton
        items={ITEMS}
        buttonLabel={TXT_16}
      />
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