import React, { ComponentProps, ReactNode } from "react";
import { boxStyle } from "./Box.css";

export interface BoxProps extends ComponentProps<"div"> {
    children?: ReactNode
}

export const Box: React.FC<BoxProps> = ({children, ...props}) => {
	return (
		<div className={boxStyle} {...props}>
			{children}
		</div>
	);
};