import { ComponentProps, ElementType } from "react";
import { buttonStyles , ButtonVariants } from "./styles.css";

export type ButtonProps = ComponentProps<"button"> & ButtonVariants & {
    as?: ElementType;
}

export function Button({children, variant, as: Component = "button", ...props}: ButtonProps) {
	const variantClass = buttonStyles({ variant });

	return (
		<Component className={variantClass} {...props}>
			{children}
		</Component>
	);
}