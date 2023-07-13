import { ComponentProps } from "react";
import { textAreaStyles } from "./styles.css";

export type TextAreaProps = ComponentProps<"textarea">

export function TextArea({ ...props }:TextAreaProps) {
	return (
		<textarea className={textAreaStyles} {...props} />
	);
}