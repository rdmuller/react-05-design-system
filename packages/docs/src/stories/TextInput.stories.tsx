import "@ignite-ui/css";

import { Box, Text, TextInput, TextInputProps } from "@ignite-ui/react";
import { space } from "@ignite-ui/tokens";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Form/Text input",
	component: TextInput,
	args: {},
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
		placeholder: "Type your name"
	}
};

export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true
	}
};

export const WithPrefix: StoryObj<TextInputProps> = {
	args: {
		prefix: "call.com/"
	}
};
