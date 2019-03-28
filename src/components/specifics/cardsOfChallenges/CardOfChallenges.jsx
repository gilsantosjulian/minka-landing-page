import React from 'react';
import { Box, Paragraph, ResponsiveContext, Heading } from 'grommet';

export default ({
  image, title, subTitle, textOne, textTwo, textThree, description
}) => {

  const getWith = (size) => {
    if (size === 'xsmall')
      return '350px';
    if (size === 'small')
      return '400px';
    if (size === 'medium' || size === 'large')
      return '500px';
  };

  const getHeight = (size) => {
    if (size === 'xsmall')
      return '500px';
    if (size === 'large' || size === 'xlarge' || size === 'medium' || size === 'small')
      return '500px';
  };

  const renderCard = (size, image, title, subTitle, textOne, textTwo, textThree, description) => {
    return (
      <Box
        width={getWith(size)}
        height={getHeight(size)}
        align='center'
        justify='center'
        pad='medium'
        background='rgba(114, 139, 197, 0.36)'
        round='21px'
        style={{ maxWidth: size === 'xsmall' || size === 'small' ? '90%' : '' }}>
        >
        <Box
          style={{ marginBottom: 15, marginTop: -50 }}>
          <object
            style={{ marginTop: -100 }}
            type='image/svg+xml'
            data={image}>
            Tu navegador no soporta svg
          </object>
        </Box>

        <Heading
          level='2'
          textAlign='center'
          color='accent-2'>
          <span>
            {title}
          </span>
        </Heading>

        <Paragraph
          margin='small'
          color='light-1'
          justify='left'
          size={'small'}
          style={{ padding: '0 10px', maxWidth: size === 'xlarge' ? '395px' : '432px' }}>
          {textOne}
        </Paragraph>

        <Paragraph
          margin='small'
          color='light-1'
          justify='left'
          size={'small'}
          style={{ padding: '0 10px', maxWidth: size === 'xlarge' ? '395px' : '432px' }}>
          {textTwo}
        </Paragraph>

        <Paragraph
          margin='small'
          color='light-1'
          justify='left'
          size={'small'}
          style={{ padding: '0 10px', maxWidth: size === 'xlarge' ? '395px' : '432px' }}>
          {textThree}
        </Paragraph>

        <Box
          margin='small'
        >
          <Heading
            level='2'
            textAlign='center'
            color='light-1'>
            <span>
              {subTitle}
            </span>
          </Heading>

          <Heading
            level='3'
            textAlign='center'
            color='accent-2'>
            <span>
              {description}
            </span>
          </Heading>
        </Box>

      </Box>

    );
  }

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          renderCard(size, image, title, subTitle, textOne, textTwo, textThree, description)
        );
      }}
    </ResponsiveContext.Consumer>
  );
}