import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { textStyles } from "../Text/styles.css";

export const multiStepContainerStyle = style([
    
]);

export const textMultiStepStyle = style([
	textStyles({
		size: "xs" 
	}),
	sprinkles({
		color: "gray200",
	}),
]); 