import React from 'react';
import { Box, Carousel } from 'grommet';

import CarouselItem from 'components/specifics/problem/CarouselItem'
import useGetDataFromFirestore from 'hooks/useGetDataFromFirestore';

const ID = 'problem';

export default () => {
  const texts = useGetDataFromFirestore('en', 'problem');

  return (
    <Box
      id={ID}
      pad={{ bottom: 'xlarge' }}>
      <Carousel
        play={5000}>
        <CarouselItem
          title={texts.txt1}
          description={texts.txt2}
          options={texts.txt3}
          image={require('assets/images/without.svg')}
          background={require('assets/images/without-bg.svg')}
        />
        <CarouselItem
          title={texts.txt4}
          description={texts.txt5}
          options={texts.txt6}
          image={require('assets/images/with.svg')}
          background={require('assets/images/with-bg.svg')}
        />
      </Carousel>
    </Box>
  );
};