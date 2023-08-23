import * as PrimitiveToast from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import * as styles from "./styles.css";

export const RadixToastProvider = PrimitiveToast.Provider;
export const RadixToastViewport = PrimitiveToast.Viewport;

export type ToastProps = PrimitiveToast.ToastProps & styles.ToastVariants & {
	description?: string
} 

export function Toast({description, title, duration = 3000, status = "info", ...props}:ToastProps) {
	const toastContainerCss = styles.toastContainer({ status });

	return (
		<PrimitiveToast.Root duration={duration} className={toastContainerCss} {...props}>
			<div>
				<PrimitiveToast.Title className={styles.toastTitle}>
					{title}
				</PrimitiveToast.Title>
				<PrimitiveToast.Description className={styles.toastDescription}>
					{description}
				</PrimitiveToast.Description>
			</div>
			<PrimitiveToast.Close asChild className={styles.ToastButtonClose}>
				<X weight="fill" />
			</PrimitiveToast.Close>
		</PrimitiveToast.Root>
	);
}