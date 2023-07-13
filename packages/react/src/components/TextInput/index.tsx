import { ComponentProps } from "react";
import { inputStyle, prefixStyle, textInputContainerStyle } from "./styles.css";

export interface TextInputProps extends ComponentProps<"input"> {
    prefix?: string
}

export function TextInput({ prefix, ...props }:TextInputProps) {
	return (
		<div className={textInputContainerStyle}>
			{!!prefix && <span className={prefixStyle}>{prefix}</span>}
			<input className={inputStyle} {...props} />
		</div>
	);
}