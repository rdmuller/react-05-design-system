import { ComponentProps, ElementRef, ElementType, forwardRef } from "react";
import { buttonStyles , ButtonVariants } from "./styles.css";

export type ButtonProps = ComponentProps<"button"> & ButtonVariants & {
    as?: ElementType;
}

//export function Button({children, variant, as: Component = "button", ...props}: ButtonProps) {
//export const Button: React.FC<ButtonProps> = ({children, variant, size, as: Component = "button", ...props}: ButtonProps) => {
export const Button = forwardRef<ElementRef<"button">, ButtonProps>(
	({children, variant, size, as: Component = "button", ...props}:ButtonProps, ref) => {
		const variantClass = buttonStyles({ variant, size });

		return (
			<Component className={variantClass} {...props} ref={ref}>
				{children}
			</Component>
		);
	});

Button.displayName = "Button";