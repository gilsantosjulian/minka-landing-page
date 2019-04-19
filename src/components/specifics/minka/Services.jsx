import React from 'react';
import { Box, Paragraph, ResponsiveContext } from 'grommet';

import Title from 'components/generics/Title';
import useGetDataFromFirestore from 'hooks/useGetDataFromFirestore';
import CardsOfServices from 'components/specifics/services/CardsOfServices';

const ID = 'services';

export default () => {
  const texts = useGetDataFromFirestore('en', 'services');

  return (
    <ResponsiveContext.Consumer>
    {(size) => {
      return (
        <Box
          id={ID}
          background={'light-2'}>
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
          <CardsOfServices
            firstImage={require('assets/images/micropayments.svg')}
            firstTitle={texts.txt4}
            firstText={texts.txt5}
            secondImage={require('assets/images/wallet.svg')}
            secondTitle={texts.txt6}
            secondText={texts.txt7}
            thirdImage={require('assets/images/realtimepayment.svg')}
            thirdTitle={texts.txt8}
            thirdText={texts.txt9}
            fourthImage={require('assets/images/marketplace.svg')}
            fourthTitle={texts.txt10}
            fourthText={texts.txt11}
            fifthImage={require('assets/images/transfer.svg')}
            fifthTitle={texts.txt12}
            fifthText={texts.txt13}
            sixthImage={require('assets/images/communication.svg')}
            sixthTitle={texts.txt14}
            sixthText={texts.txt15}
          />
        </Box>
      );
    }}
    </ResponsiveContext.Consumer>
  );
}