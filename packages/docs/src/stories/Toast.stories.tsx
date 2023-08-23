import "@rdmuller-ignite-ui/css";

import { Button, Toast, ToastProps, ToastProvider } from "@rdmuller-ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";
import { useState } from "react";

export default {
	title: "Data display/Toast",
	component: Toast,
	tags: ["autodocs"],
	args: {
		title: "Scheduling made",
		description: "Wednesday, October 23rd at 4pm",
		status: "info"
	},
	argTypes: {
		status: {
			options: ["error", "success", "info", "warning"],
			control: {
				type: "inline-radio"
			}
		}
	},
	decorators: [
		(_, { allArgs }) => {
			const [open, setOpen] = useState(false);

			function showToast(newState: boolean) {
				setOpen(newState);
			}

			return (
				<ToastProvider>
					<Button onClick={() => showToast(true)}>
						Show toast
					</Button>
					<Toast {...allArgs} open={open} onOpenChange={showToast} />
				</ToastProvider>
			);
		}
	]
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};

export const Success: StoryObj<ToastProps> = {
	args: {
		status: "success"
	}
};

export const Error: StoryObj<ToastProps> = {
	args: {
		status: "error"
	}
};