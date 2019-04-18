import React from 'react';
import { Box } from 'grommet';

import CardsOfAbout from 'components/specifics/about/CardsOfAbout';
import RegisterSectionOfAbout from 'components/specifics/about/RegisterSectionOfAbout';
import { TXT_17, TXT_18, TXT_19, TXT_20, TXT_21, TXT_22 } from 'assets/strings';

const ID = 'about';

export default () => {

  return (
    <Box
      id={ID}>
      <CardsOfAbout
        cupImage={require('assets/images/cup.svg')}
        bbqImage={require('assets/images/bbq.svg')}
        noteImage={require('assets/images/20.svg')}
        cupText={TXT_17}
        bbqText={TXT_18}
        noteText={TXT_19}
      />
      <RegisterSectionOfAbout
        texts={[
          TXT_20,
          TXT_21,
          TXT_22,
        ]}
      />
    </Box>
  );
};