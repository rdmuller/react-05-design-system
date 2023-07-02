import { ComponentProps, ElementType } from "react";
import { buttonStyle, ButtonVariants } from "./styles.css";

export type ButtonProps = ComponentProps<"button"> & ButtonVariants & {
    as?: ElementType;
}

export function Button({children, variant, as: Component = "button", ...props}: ButtonProps) {
	const variantClass = buttonStyle({ variant });

	return (
		<Component className={variantClass} {...props}>
			{children}
		</Component>
	);
}