import { ComponentProps } from "react";
import { inputStyle, prefixStyle, textInputStyle } from "./styles.css";

export interface TextInputProps extends ComponentProps<"input"> {
    prefix?: string
}

export function TextInput({ prefix, ...props }:TextInputProps) {
	return (
		<div className={textInputStyle}>
			{!!prefix && <span className={prefixStyle}>{prefix}</span>}
			<input className={inputStyle} {...props} />
		</div>
	);
}