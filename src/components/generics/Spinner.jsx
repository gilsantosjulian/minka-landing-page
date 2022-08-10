import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import { css } from '@emotion/core';
import { ScaleLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default ({ visibility }) => {

	return (
		<ResponsiveContext.Consumer>
			{(size) => {
				return (
					<Box className='sweet-loading'>
						<ScaleLoader
							css={override}
							sizeUnit={"px"}
							size={80}
							color={'#FFD16A'}
							loading={visibility}
						/>
					</Box>
				);
			}}
		</ResponsiveContext.Consumer>
	);
}