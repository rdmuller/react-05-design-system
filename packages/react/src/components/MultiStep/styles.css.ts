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

export const stpesStyles = style([
	sprinkles({
		gap: 2,
		marginTop: 1,
	}),
	{
		display: "grid",
		gridTemplateColumns: "repeat(4, 1fr)",
	}
]);