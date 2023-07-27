import "@rdmuller-ignite-ui/css";

import { Button, Tooltip, TooltipProps } from "@rdmuller-ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Data display/Tooltip",
	component: Tooltip,
	args: {
		content: "Tooltip example",
		children: <Button>Test a tooltip</Button>
	},
	argTypes: {
		content: {
			controls: {
				content: "text"
			},
		},
		children: {
			controls: {
				type: null
			}
		}
	}
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};