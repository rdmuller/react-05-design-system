import { HTMLAttributes } from "react";
import { HeadingVariantSize, headingStyles } from "./styles.css";

const allowedHtmlTags = ["h1", "h2", "h3"] as const;
type AllowedHtmlTags = (typeof allowedHtmlTags)[number];

export type HeadingProps = HTMLAttributes<HTMLElement> & HeadingVariantSize & {
	as?: AllowedHtmlTags;
};

export const Heading = ({ children, size, as: Component = "h2",  ...props }:HeadingProps) => {
	const variantClass = headingStyles({ size });

	return (
		<Component className={variantClass} {...props}>
			{children}
		</Component>
	);
};