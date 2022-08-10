import React from 'react';
import { Box, Paragraph, ResponsiveContext } from 'grommet';

import Title from 'components/generics/Title';
import useGetDataFromFirestore from 'hooks/useGetDataFromFirestore';
import ContactForm from 'components/specifics/contact/ContactForm';
import Map from 'components/specifics/contact/Map';

const ID = 'contact';

export default () => {
  const texts = useGetDataFromFirestore('en', 'contact');

  const getDirection = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
        return 'column';

    return 'row';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            id={ID}>
            <Box
              pad={{ horizontal: 'xlarge' }}>
              <Title
                darkBlue
                textOne={texts.txt1}
                textTwo={texts.txt2}
              />
              <Paragraph
                size={size}
                color='dark-2'
                textAlign={'center'}>
                {texts.txt3}
              </Paragraph>
            </Box>
            <Box
              direction={getDirection(size)}>
              <ContactForm />
              <Map />
            </Box>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};