import { HTMLAttributes } from "react";
import { TextVariantSize, textStyles } from "./Text.css";

const allowedHtmlTags = ["p", "span", "strong"] as const;
type AllowedHtmlTags = (typeof allowedHtmlTags)[number];

export type TextProps = HTMLAttributes<HTMLElement> & TextVariantSize & {
	as?: AllowedHtmlTags;
};

export const Text = ({ children, size, as: Component = "p",  ...props }:TextProps) => {
	const variantClass = textStyles({ size });

	return (
		<Component className={variantClass} {...props}>
			{children}
		</Component>
	);
};