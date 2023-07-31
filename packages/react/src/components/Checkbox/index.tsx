import { Check } from "phosphor-react";
import { checkboxContainerStyles, checkboxIndicatorStyles } from "./styles.css";
import * as CheckboxUI from "@radix-ui/react-checkbox";
import { ComponentProps, ElementRef, forwardRef } from "react";

export type CheckboxProps = ComponentProps<typeof CheckboxUI.Root>

export const Checkbox = forwardRef<ElementRef<"button">, CheckboxProps>((props, ref) => {
	return (
		<CheckboxUI.Root className={checkboxContainerStyles} {...props} ref={ref}>
			<CheckboxUI.Indicator asChild className={checkboxIndicatorStyles}>
				<Check weight="bold" />
			</CheckboxUI.Indicator>
		</CheckboxUI.Root>
	);
});

Checkbox.displayName = "Checkbox";