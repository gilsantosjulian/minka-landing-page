import React from 'react';
import { Box, Carousel, Image, ResponsiveContext } from 'grommet';

export default () => {

	const ID = 'sponsors';

	const getMargin = (size) => {
		if (size === 'xsmall' ||
			size === 'small' ||
			size === 'medium')
			return '1% 0%';

		return 'medium';
	};

	const desktopCarousel = (size) => {
		return (
			<Carousel
				fill
				play={5000}
			>
				<Box direction='row' margin={getMargin(size)}>
					<Image fit="cover" src={require('assets/images/logo-google.svg')} />
					<Image fit="cover" src={require('assets/images/logo-ach.svg')} />
					<Image fit="cover" src={require('assets/images/logo-branko.svg')} />
					<Image fit="cover" src={require('assets/images/logo-luka.svg')} />
				</Box>
				<Box direction='row' margin={getMargin(size)}>
					<Image fit="cover" src={require('assets/images/logo-fintech.svg')} />
					<Image fit="cover" src={require('assets/images/logo-google.svg')} />
					<Image fit="cover" src={require('assets/images/logo-ach.svg')} />
					<Image fit="cover" src={require('assets/images/logo-branko.svg')} />
				</Box>

			</Carousel>
		);
	};

	const responsiveCarousel = (size) => {
		return (
			<Box
				margin={getMargin(size)}
			>
				<Carousel
					fill
					play={5000}
				>
					<Image fit="cover" src={require('assets/images/logo-google.svg')} />
					<Image fit="cover" src={require('assets/images/logo-ach.svg')} />
					<Image fit="cover" src={require('assets/images/logo-branko.svg')} />
					<Image fit="cover" src={require('assets/images/logo-luka.svg')} />
					<Image fit="cover" src={require('assets/images/logo-fintech.svg')} />
				</Carousel >
			</Box>
		);
	};

	const showCarousel = (size) => {
		if (size === 'xsmall' ||
			size === 'small' ||
			size === 'medium' ||
			size === 'large')
			return responsiveCarousel(size);

		return desktopCarousel(size);
	};

	return (
		<ResponsiveContext.Consumer>
			{(size) => {
				return (
					<Box
						id={ID}
						overflow='hidden'
						background='dark-1'
						pad={{ vertical: 'large', horizontal: 'xlarge' }}
					>
						{showCarousel(size)}
					</Box>
				);
			}}
		</ResponsiveContext.Consumer>
	);
};