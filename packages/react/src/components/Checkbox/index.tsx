import { Check } from "phosphor-react";
import { checkboxContainerStyles, checkboxIndicatorStyles } from "./styles.css";
import * as CheckboxUI from "@radix-ui/react-checkbox";
import { ComponentProps } from "react";

export type CheckboxProps = ComponentProps<typeof CheckboxUI.Root>

export function Checkbox(props: CheckboxProps ) {
	return (
		<CheckboxUI.Root className={checkboxContainerStyles} {...props}>
			<CheckboxUI.Indicator asChild className={checkboxIndicatorStyles}>
				<Check weight="bold" />
			</CheckboxUI.Indicator>
		</CheckboxUI.Root>
	);
}