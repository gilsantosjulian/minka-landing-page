import React from 'react';
import { Box, Paragraph, ResponsiveContext } from 'grommet';

import Title from 'components/generics/Title';
import CardsOfMinkaAbout from 'components/specifics/minkaAbout/CardsOfMinkaAbout';
import useGetDataFromFirestore from 'hooks/useGetDataFromFirestore';

const ID = 'about';

export default () => {
  const texts = useGetDataFromFirestore('en', 'about');

  return (
    <ResponsiveContext.Consumer>
    {(size) => {
      return (
        <Box
          id={ID}>
          <Title
            textOne={texts.txt1}
            textTwo={texts.txt2}
            textTwoColor='#2E416D'
          />
          <Paragraph
            size={size}
            color='dark-2'
            textAlign='center'
            margin={{ horizontal: 'xlarge' }}>
            {texts.txt3}
          </Paragraph>
          <CardsOfMinkaAbout
            firstImage={require('assets/images/what.svg')}
            firstQuestion={texts.txt4}
            firstText={texts.txt5}
            secondImage={require('assets/images/how.svg')}
            secondQuestion={texts.txt6}
            secondText={texts.txt7}
            thirdImage={require('assets/images/why.svg')}
            thirdQuestion={texts.txt8}
            thirdText={texts.txt9}
          />
        </Box>
      );
    }}
    </ResponsiveContext.Consumer>
  );
};