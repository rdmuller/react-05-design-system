import "@ignite-ui/css";

import { Heading, HeadingProps } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Typography/Heading",
	component: Heading,
	tags: ["autodocs"],
	args: {
		children: "Custom title",
	}
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
	args: {
		children: "H1 Heading",		
		as: "h1",
		size: "lg",
	},
	parameters: {
		docs: {
			description: {
				story: "Por padrão o headomg sempre será um `h2`, mas por ser alterado pela propriedade `as`"
			}
		}
	}
};