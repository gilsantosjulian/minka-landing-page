import React from 'react';
import { Box, Heading, ResponsiveContext, Paragraph } from 'grommet';

const styles = {
  cell: {
    borderBottomWidth: 'thin',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderLeftWidth: 'thin',
    borderLeftStyle: 'solid',
    borderLeftColor: 'rgba(255,255,255,0.1)',
    borderRightWidth: 'thin',
    borderRightStyle: 'solid',
    borderRightColor: 'rgba(255,255,255,0.1)',
  },
  header: {
    border: 'thin solid rgba(255,255,255,0.1)',
  },
  heading: {
    maxWidth: '100%',
  },
};

export default ({ headers, data, footer }) => {

  const renderHeader = (size) => (header) => {
    return (
      <Box
        style={styles.header}
        key={header}
        align='center'
        width='50%'
        background='accent-3'>
        <Heading
          size={size}
          level='3'
          color='accent-2'>
          {header}
        </Heading>
      </Box>
    );
  }

  const renderRow = (size) => (data) => {
    return (
      <Box
        key={data[0]}
        direction='row'>
        <Box
          style={styles.cell}
          align='center'
          justify='center'
          width='50%'
          pad='small'>
          <Heading
            size={size}
            textAlign='center'
            level='3'>
            {data[0]}
          </Heading>
        </Box>
        <Box
          style={styles.cell}
          align='center'
          justify='center'
          width='50%'
          pad='small'>
          <Heading
            size={size}
            textAlign='center'
            level='3'>
            {data[1]}
          </Heading>
        </Box>
      </Box>
    );
  }

  const getWidth = (size) => {
    if (size === 'xsmall' ||
      size === 'small' ||
      size === 'medium' ||
      size === 'large')
      return '100%';

    return '65%';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            width={getWidth(size)}>
            <Box
              direction='row'>
              {headers.map(renderHeader(size))}
            </Box>
            {data.map(renderRow(size))}
            {
              footer[0] && footer[1] && footer[2] && (
                <Box margin={{ vertical: 'medium' }}>
                  <Paragraph
                    id={footer[0]}
                    size={size}
                    textAlign='center'
                    style={styles.heading}
                    margin={{ vertical: 'medium' }}
                    level='3'>
                    {footer[0]}
                  </Paragraph>
                  <Heading
                    size={size}
                    textAlign='center'
                    style={styles.heading}
                    margin={{ top: 'large' }}
                    level='3'>
                    {footer[1]}
                  </Heading>
                  <Heading
                    size={size}
                    textAlign='center'
                    style={styles.heading}
                    level='3'>
                    {footer[2]}
                  </Heading>
                </Box>
              )
            }
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};