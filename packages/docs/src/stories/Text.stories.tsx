import "@ignite-ui/css";

import { Text, TextProps } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Typography/Text",
	component: Text,
	args: {
		children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut alias culpa quam facere obcaecati dolorem rem fugiat atque earum aperiam repellat libero modi maiores maxime itaque, architecto laborum eum?",
	}
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
	args: {
		children: "Strong text",		
		as: "strong",
	}
};