//https://www.npmjs.com/package/react-toastify
//https://app.rocketseat.com.br/h/forum/react-js/ffaadcd4-2ef4-4b41-8d95-54bb17b8372a
//https://github.com/lucasjungdeveloper/radix-tailwind/blob/main/src/components/PrimitiveToast.tsx
// https://github.com/AronAdamsRapetto/ignite-design_system/blob/master/packages/docs/src/stories/Toast.stories.tsx

import * as PrimitiveToast from "@radix-ui/react-toast";
import { X } from "phosphor-react";

export const RadixToastProvider = PrimitiveToast.Provider;
export const RadixToastViewport = PrimitiveToast.Viewport;

export interface Toast {
	id?: string;
    title?: string;
    description?: string;
	duration?: number;
	status?: "error" | "success" | "info" | "warning";
}

interface ToastProps extends PrimitiveToast.ToastProps {
	description?: string,
	status?: "error" | "success" | "info" | "warning";
}

export function RadixToast({description, title, duration = 3000, status = "info", ...props}:ToastProps) {
	return (
		<PrimitiveToast.Root duration={duration} {...props}>
			<PrimitiveToast.Close asChild>
				<X weight="fill" />
			</PrimitiveToast.Close>
			<PrimitiveToast.Title>
				{title}
			</PrimitiveToast.Title>
			<PrimitiveToast.Description>
				{description}
			</PrimitiveToast.Description>
		</PrimitiveToast.Root>
	);
}