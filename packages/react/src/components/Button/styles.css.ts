import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { style, globalStyle } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { space } from "@ignite-ui/tokens";

export const buttonStyle = recipe({
	base: style([
		sprinkles({
			borderRadius: "sm",
			fontSize: "sm",
			fontWeight: "medium",
			fontFamily: "default"
		}),
		{
			all: "unset",
			textAlign: "center",
			minWidth: "120px",
			boxSizing: "border-box",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			gap: space[2],
			cursor: "pointer",
		}
	]),

	variants: {
		variant: {
			primary: sprinkles({ color: "white" }),
		}
	},

	defaultVariants: {
		variant: "primary",
	},
});

globalStyle(`${buttonStyle} svg`, {
	width: space[4],
	height: space[4],
});

export type ButtonVariants = RecipeVariants<typeof buttonStyle>;