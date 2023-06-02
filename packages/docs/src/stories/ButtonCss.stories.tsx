import { ButtonCss } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "ButtonCss",
	component: ButtonCss,
} as Meta;

export const Normal: StoryObj = {
	args: {
		children: "Enviar"
	}
};

export const Secondary: StoryObj = {};