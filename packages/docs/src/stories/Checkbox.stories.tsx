import "@rdmuller-ignite-ui/css";

import { Box, Text, Checkbox, CheckboxProps } from "@rdmuller-ignite-ui/react";
import { space } from "@rdmuller-ignite-ui/tokens";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Form/Checkbox",
	component: Checkbox,
	args: {},
	decorators: [
		(Story) => {
			return (
				<Box as="label" style={{ display: "flex", flexDirection: "row", gap: space[2] }}>
					{Story()}
					<Text size="sm">Accept term of use</Text>
				</Box>
			);
		}
	]
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {
	args: {
	}
};
