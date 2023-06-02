import { MyButton } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "MyButton",
	component: MyButton,
} as Meta;

export const Primary: StoryObj = {
	args: {
		children: "Enviar"
	}
};

export const Secondary: StoryObj = {};