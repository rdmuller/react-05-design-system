import "@ignite-ui/css";

import { Button, ButtonProps } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

export default {
	title: "Form/Button",
	component: Button,
	args: {
		children: "Send",
	}
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: "secondary",
		children: "Create new"
	}
};

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: "tertiary",
		children: "Cancel"
	}
};

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				Proximo passo
				<ArrowRight weight="bold" />
			</>
		)
	}
};

export const Small: StoryObj<ButtonProps> = {
	args: {
		size: "sm",
	}
};

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true
	}
};
