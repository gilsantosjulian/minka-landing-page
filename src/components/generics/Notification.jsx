import React, { useState, useEffect } from 'react';
import {
	Box,
	Button,
	Layer,
	ResponsiveContext,
	Heading,
} from 'grommet';

import { FormClose, StatusGood } from 'grommet-icons';

export default ({ text, visibility = false }) => {

	const id = 'notification'

	const [open, setOpen] = useState(visibility);

	useEffect(() => {
		setTimeout(() => setOpen(false), 4000)
	}, [open])

	const onClose = () => {
		setOpen(false)
	};

	return (
		<ResponsiveContext.Consumer>
			{(size) => {
				return (
					<Box
						id={id}
						width='100%'
						height='100%'
						background='dark-1'>

						{visibility && open && (
							<Layer
								position="bottom"
								modal={false}
								margin={{ vertical: "medium", horizontal: "small" }}
								onEsc={onClose}
								responsive={false}
								plain
							>
								<Box
									align="center"
									direction="row"
									justify="between"
									round="medium"
									elevation="medium"
									pad={{ vertical: "xsmall", horizontal: "small" }}
									background="accent-2"
									width={size === 'xsmall' || size === 'small' ? 'large' : 'auto'}
								>
									<Box
										justify="around"
										direction="row"
										align='center'
										width='100%'
									>
										<Button
											icon={<StatusGood
												color={'brand'}
											/>
											}
											onClick={onClose} plain
										/>
										<Heading
											level='3'
											textAlign='center'
											color={'brand'}
											size={size}
										>
											{text}
										</Heading>
										<Button
											icon={<FormClose
												color={'brand'}
											/>
											}
											onClick={onClose} plain
										/>
									</Box>
								</Box>
							</Layer>
						)}

					</Box >
				);

			}}
		</ResponsiveContext.Consumer>
	);
}