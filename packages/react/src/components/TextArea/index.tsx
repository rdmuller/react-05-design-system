import { ComponentProps, ElementRef, forwardRef } from "react";
import { textAreaStyles } from "./styles.css";

export type TextAreaProps = ComponentProps<"textarea">

export const TextArea = forwardRef<ElementRef<"textarea">, TextAreaProps>(
	({...props}:TextAreaProps, ref) => {
		return (
			<textarea className={textAreaStyles} {...props} ref={ref} />
		);
	});

TextArea.displayName = "TextArea";