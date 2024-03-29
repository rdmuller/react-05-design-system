import "@rdmuller-ignite-ui/css";

import { Avatar, AvatarProps } from "@rdmuller-ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Data display/Avatar",
	component: Avatar,
	args: {
		src: "https://avatars.githubusercontent.com/u/46840910?v=4",
		alt: "Ronald D. Müller"
	},
	argTypes: {
		src: {
			controls: {
				type: "text"
			}
		}
	}
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	}
};