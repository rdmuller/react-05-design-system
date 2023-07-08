import React, { ComponentProps, ElementType, ReactNode } from "react";
import { boxStyle } from "./styles.css";

export interface BoxProps extends ComponentProps<"div"> {
    children?: ReactNode
	as: ElementType
}

export const Box: React.FC<BoxProps> = ({children, as: Component = "div", ...props}) => {
	return (
		<Component className={boxStyle} {...props}>
			{children}
		</Component>
	);
};