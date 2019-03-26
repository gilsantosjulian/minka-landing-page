import React from 'react';
import { Box } from 'grommet';

import Cards from 'components/specifics/about/Cards';
import { TXT_17, TXT_18, TXT_19 } from 'assets/strings';

const ID = 'about';

export default () => {

  return (
    <Box
      id={ID}>
      <Cards
        cupImage={require('assets/images/cup.svg')}
        bbqImage={require('assets/images/bbq.svg')}
        noteImage={require('assets/images/note.svg')}
        cupText={TXT_17}
        bbqText={TXT_18}
        noteText={TXT_19}
      />
    </Box>
  );
};