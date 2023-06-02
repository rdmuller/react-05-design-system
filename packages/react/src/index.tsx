import React from "react";
import * as styles from "./styles/MyButton.css";
import { ButtonCss } from "./ButtonCss";

/*interface ButtonProps {
	text: string;
}

export function Button ({ text = "Teste" }:ButtonProps) {
	return (
		<button className={styles.button}>{text}</button>
	);
}*/

interface ButtonProps {
	children?: React.ReactNode
}

const MyButton: React.FC<ButtonProps> = ({ 
	children
}) => {
	return (
		<button className={styles.myButton}>{children}</button>
	);
};

export { MyButton, ButtonCss };