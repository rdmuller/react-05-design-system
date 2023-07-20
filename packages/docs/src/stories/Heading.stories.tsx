import "@rdmuller-ignite-ui/css";

import { Heading, HeadingProps } from "@rdmuller-ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Typography/Heading",
	component: Heading,
	tags: ["autodocs"],
	args: {
		children: "Custom title",
		size: "md",
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
			control: {
				type: "inline-radio"
			}
		}
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