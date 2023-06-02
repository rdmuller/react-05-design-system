import React from "react";

interface ButtonCssProps {
    children?: React.ReactNode;
}

export function ButtonCss ({children}: ButtonCssProps) {
	const buttonStyle = {
		borderRadius: "8px",
		padding: "2rem",
		backgroundColor: "blue",
		color: "white",
		border: 0
	};

	return (
		<button style={buttonStyle}>{children}</button>
	);
}
