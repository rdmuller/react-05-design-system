import { ComponentProps, ElementRef, forwardRef } from "react";
import { inputStyle, prefixStyle, textInputContainerStyle, TextInputVariants } from "./styles.css";

export type TextInputProps = ComponentProps<"input"> & TextInputVariants & {
    prefix?: string
}

export const TextInput = forwardRef<ElementRef<"input">, TextInputProps>(
	({ prefix, size, ...props }:TextInputProps, ref) => {
		const textContainerCss = textInputContainerStyle({ size });

		return (
			<div className={textContainerCss}>
				{!!prefix && <span className={prefixStyle}>{prefix}</span>}
				<input ref={ref} className={inputStyle} {...props} />
			</div>
		);
	});

TextInput.displayName = "TextInput";