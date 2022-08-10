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

  const minHeight = (size) => {
    if (size === 'xsmall' || size === 'small' || size === 'medium' || size === 'large')
      return 'auto';
    return '200px';
  };

  const renderCard = (size, image, title, subTitle, textOne, textTwo, textThree, description) => {
    return (
      <Box
        width={getWith(size)}
        align='center'
        pad='medium'
        background='rgba(114, 139, 197, 0.36)'
        round='21px'
        style={{ maxWidth: size === 'xsmall' || size === 'small' ? '90%' : '' }}
      >

        <object
          style={{ marginTop: -100 }}
          type='image/svg+xml'
          data={image}>
          Tu navegador no soporta svg
          </object>

        <Heading
          level='2'
          textAlign='center'
          color='accent-2'>
          <span>
            {title}
          </span>
        </Heading>

        <Box
          style={{ minHeight: minHeight(size) }}
        >
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
        </Box>

        <Box
          margin='small'
        >
          <Heading
            level={size === 'xsmall' || size === 'small' ? 3 : 2}
            size={size}
            textAlign='center'
            color='light-1'>
            <span>
              {subTitle}
            </span>
          </Heading>

          <Heading
            level='3'
            size={size}
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