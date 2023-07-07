import "@ignite-ui/css";

import { TextInput, TextInputProps } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Form/Text input",
	component: TextInput,
	args: {
		children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut alias culpa quam facere obcaecati dolorem rem fugiat atque earum aperiam repellat libero modi maiores maxime itaque, architecto laborum eum?",
	}
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};

export const CustomTag: StoryObj<TextInputProps> = {
	args: {
		children: "Strong textInput",		
	}
};