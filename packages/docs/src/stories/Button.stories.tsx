import "@ignite-ui/css";

import { Button, ButtonProps } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Form/Button",
	component: Button,
	args: {
		children: "Button",
	}
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};
