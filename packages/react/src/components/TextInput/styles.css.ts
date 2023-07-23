import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { colors } from "@rdmuller-ignite-ui/tokens";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const textInputContainerStyle = recipe({
	base: style([
		sprinkles({
			backgroundColor: "gray900",
			borderRadius: "sm",
			borderStyle: "solid",
			borderWidth: "2px",
			borderColor: "gray900",
		}),
		{
			boxSizing: "border-box",
			display: "flex",
			alignItems: "center",
			selectors: {
				"&:has(input:focus)": {
					borderColor: colors.ignite300
				},
				"&:has(input:disabled)": {
					opacity: 0.5,
					cursor: "not-allowed"
				}
			}
		},
	]),

	variants: {
		size: {
			sm: sprinkles({ 
				paddingBottom: 2,
				paddingTop: 2,
				paddingLeft: 3,
				paddingRight: 3,
			}),
			md: sprinkles({ 
				paddingBottom: 3,
				paddingTop: 3,
				paddingLeft: 4,
				paddingRight: 4,
			})
		}
	},

	defaultVariants: {
		size: "md"
	}
});

export const prefixStyle = sprinkles({
	fontFamily: "default",
	fontSize: "sm",
	color: "gray400",
	fontWeight: "regular"
});

export const inputStyle = style([
	sprinkles({
		fontFamily: "default",
		fontSize: "sm",
		color: "white",
		fontWeight: "regular",
		backgroundColor: "transparent",
		borderStyle: "none",
	}),
	{
		width: "100%",
		":focus": {
			outline: 0
		},

		":disabled": {
			cursor: "not-allowed"
		},

		"::placeholder": {
			color: sprinkles({ color: "gray400" })
		}
	}
]);

export type TextInputVariants = RecipeVariants<typeof textInputContainerStyle>