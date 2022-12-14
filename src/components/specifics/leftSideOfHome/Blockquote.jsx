import React from 'react';
import { Paragraph, Box, ResponsiveContext } from 'grommet';

export default ({ address, date, time, prize, bonus }) => {
  const addressSplitted = address.split(':');
  const dateSplitted = date.split(':');
  const timeTitle = time.substring(0, 4);
  const timeText = time.substring(5, time.length);
  const prizeSplitted = prize.split(':');
  const bonusSplitted = bonus.split(':');

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            className='blockquote'
            margin={{ left: 'xlarge', right: 'large' }}>
            <Paragraph
              size={size}
              color='dark-2'>
              <strong>{addressSplitted[0]}:</strong>{addressSplitted[1]}
            </Paragraph>
            <Paragraph
              size={size}
              color='dark-2'>
              <strong>{dateSplitted[0]}:</strong>{dateSplitted[1]}
            </Paragraph>
            <Paragraph
              size={size}
              color='dark-2'>
              <strong>{timeTitle}:</strong>{timeText}
            </Paragraph>
            <Paragraph
              size={size}
              color='dark-2'>
              <strong>{prizeSplitted[0]}:</strong>{prizeSplitted[1]}
            </Paragraph>
            <Paragraph
              size={size}
              color='dark-2'>
              <strong>{bonusSplitted[0]}:</strong>{bonusSplitted[1]}
            </Paragraph>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};