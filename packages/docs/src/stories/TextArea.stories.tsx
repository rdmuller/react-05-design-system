import "@rdmuller-ignite-ui/css";

import { Box, Text, TextArea, TextAreaProps } from "@rdmuller-ignite-ui/react";
import { space } from "@rdmuller-ignite-ui/tokens";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Form/Text area",
	component: TextArea,
	args: { 
		disabled: false,
	},
	argTypes: {
		disabled: {
			control: { type: "boolean" }
		}
	},
	decorators: [
		(Story) => {
			return (
				<Box as="label" style={{ display: "flex", flexDirection: "column", gap: space[2] }}>
					<Text size="sm">Observations</Text>
					{Story()}
				</Box>
			);
		}
	]
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
	args: {
		placeholder: "Add any observations"
	}
};

export const Disabled: StoryObj<TextAreaProps> = {
	args: {
		disabled: true
	}
};
