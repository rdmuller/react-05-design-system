import "@rdmuller-ignite-ui/css";

import { Box, Text, TextInput, TextInputProps } from "@rdmuller-ignite-ui/react";
import { space } from "@rdmuller-ignite-ui/tokens";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Form/Text input",
	component: TextInput,
	args: {
		disabled: false,
	},
	argTypes: {
		disabled: {
			control: { type: "boolean" }
		},
		size: {
			options: ["sm", "md"],
			control: {
				type: "inline-radio"
			}
		},
		prefix: {
			control: { type: "text" }
		}
	},
	decorators: [
		(Story) => {
			return (
				<Box as="label" style={{ display: "flex", flexDirection: "column", gap: space[2] }}>
					<Text size="sm">Email address</Text>
					{Story()}
				</Box>
			);
		}
	]
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
	args: {
		placeholder: "Type your name",
	}
};

export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true
	}
};

export const WithPrefix: StoryObj<TextInputProps> = {
	args: {
		prefix: "call.com/",
		placeholder: "your-username"
	}
};
