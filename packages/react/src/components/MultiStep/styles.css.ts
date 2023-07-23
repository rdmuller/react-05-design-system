import { createVar, style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { textStyles } from "../Text/styles.css";
import { recipe } from "@vanilla-extract/recipes";
import { colors } from "@rdmuller-ignite-ui/tokens";

export const multiStepContainerStyle = style({});

export const stepsSize = createVar();

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
		gridTemplateColumns: `repeat(${stepsSize}, 1fr)`
	}
]);

export const stepStyles = recipe({
	base: sprinkles({
		height: 1,
		borderRadius: "px",
		backgroundColor: "gray600"
	}),
	variants: {
		active: {
			true: {
				backgroundColor: colors.gray100
				//sprinkles({ backgroundColor: "gray100" })
			}
		}
	}
});