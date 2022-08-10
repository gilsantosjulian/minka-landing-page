import React from 'react';
import { Box } from 'grommet';

import Feature from 'components/specifics/features/Feature';
import useGetDataFromFirestore from 'hooks/useGetDataFromFirestore';
import useMouseMovementEffect from 'hooks/useMouseMovementEffect';

const ID = 'features';

export default () => {
  const texts = useGetDataFromFirestore('en', 'features');
  const[x, y, onMouseMove] = useMouseMovementEffect();


  return (
    <Box
      id={ID}
      onMouseMove={onMouseMove}>
      <Feature
        firstText={texts.txt1}
        secondText={texts.txt2}
        thirdText={texts.txt3}
        image={require('assets/images/buy.svg')}
        background={require('assets/images/buy-bg.svg')}
        x={x}
        y={y}
      />
      <Feature
        reverse
        firstText={texts.txt4}
        secondText={texts.txt5}
        thirdText={texts.txt6}
        image={require('assets/images/send.svg')}
        background={require('assets/images/send-bg.svg')}
        x={x}
        y={y}
      />
    </Box>
  );
};