import "@rdmuller-ignite-ui/css";

import { Toast, ToastProps } from "@rdmuller-ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Data display/Toast",
	component: Toast,
	args: {
		title: "título",
		content: "Toast example",
	},
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};