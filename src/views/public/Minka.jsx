import React, { useState } from 'react';
import { Box } from 'grommet';

import Toolbar from 'components/generics/Toolbar.jsx';
import MinkaHome from 'components/specifics/minka/MinkaHome.jsx';
import Sponsors from 'components/generics/Sponsors.jsx';
import MinkaAbout from 'components/specifics/minka/MinkaAbout.jsx';
import Problem from 'components/specifics/minka/Problem.jsx';

import { TXT_203, TXT_204, TXT_205, TXT_206, TXT_207, TXT_208 } from 'assets/strings';
import PubSub from 'services/pubSub.js';

const ITEMS = [
  {
    id: 'home',
    text: TXT_203,
  },
  {
    id: 'about',
    text: TXT_204,
  },
  {
    id: 'problem',
    text: TXT_205,
  },
  {
    id: 'services',
    text: TXT_206,
  },
  {
    id: 'features',
    text: TXT_207,
  },
  {
    id: 'contact',
    text: TXT_208,
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
        withButton={false}
        items={ITEMS}
      />
      <MinkaHome />
      <Sponsors />
      <MinkaAbout />
      <Problem />
    </Box>
  );
};