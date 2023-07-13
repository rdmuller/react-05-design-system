import "@ignite-ui/css";

import { Box, Text, MultiStep, MultiStepProps } from "@ignite-ui/react";
import { space } from "@ignite-ui/tokens";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Form/Multi step",
	component: MultiStep,
	args: {},
	decorators: [
		(Story) => {
			return (
				<Box as="label" style={{ display: "flex", flexDirection: "column", gap: space[2] }}>
					{Story()}
				</Box>
			);
		}
	]
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {
	args: {
	}
};
