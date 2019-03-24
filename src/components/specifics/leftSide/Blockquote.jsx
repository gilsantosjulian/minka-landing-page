import React from 'react';
import { Paragraph } from 'grommet';

export default ({ text }) => {
  return (
    <Paragraph
      className='blockquote'
      color='dark-2'>
      {text}
    </Paragraph>
  );
};