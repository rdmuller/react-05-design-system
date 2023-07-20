import "@rdmuller-ignite-ui/css";

import { Box, BoxProps, Text } from "@rdmuller-ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Surfaces/Box",
	component: Box,
	args: {
		children: (
			<>
				<Text>Testando elemento Box</Text>
			</>
		)
	},
	argTypes: {
		children: {
			control: { type: null }
		}
	}
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};