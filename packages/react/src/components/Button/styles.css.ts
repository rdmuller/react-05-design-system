import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { globalStyle, style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { colors, space } from "@rdmuller-ignite-ui/tokens";

const baseButtonStyle = style([
	sprinkles({
		borderRadius: "sm",
		fontSize: "sm",
		fontWeight: "medium",
		fontFamily: "default",
		borderStyle: "none",
		paddingLeft: 4,
		paddingRight: 4,
		paddingTop: 0,
		paddingBottom: 0,
	}),
	{
		textAlign: "center",
		minWidth: "120px",
		boxSizing: "border-box",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: space[2],

		cursor: "pointer",

		selectors: {
			"&:disabled": {
				cursor: "not-allowed",
			}
		}
	},
]);

export const buttonStyles = recipe({
	base: baseButtonStyle,

	variants: {
		size: {
			sm: { height: "38px" },
			md: { height: "46px" },
		},

		variant: {
			primary: style([
				sprinkles({ 
					color: "white",
					backgroundColor: "ignite500"
				}),
				{
					selectors: {
						"&:not(:disabled):hover": {
							backgroundColor: colors.ignite300
						},
						"&:disabled": {
							backgroundColor: colors.gray200,
						}
					}
				}
			]),

			secondary: style([
				sprinkles({
					color: "ignite300",
					borderColor: "ignite500",
					borderStyle: "solid",
					backgroundColor: "transparent",
					borderWidth: "2px",
				}),
				{
					selectors: {
						"&:not(:disabled):hover": {
							backgroundColor: colors.ignite500,
							color: colors.white,
						},
						"&:disabled": {
							backgroundColor: colors.gray200,
							color: colors.gray200,
						}
					}
				}
			]),

			tertiary: style([
				sprinkles({
					color: "gray100",
					backgroundColor: "transparent",
				}),
				{
					selectors: {
						"&:not(:disabled):hover": {
							color: colors.white,
						},
						"&:disabled": {
							color: colors.gray600,
						}
					}
				}
			])		
		},
	},

	/*compoundVariants: [
		{
			variants: {
				size: "md",
				variant: "primary",
			},
		},
	],*/

	defaultVariants: {
		variant: "primary",
		size: "md"
	},
});

globalStyle(`${baseButtonStyle} svg`, {
	width: space[4],
	height: space[4],
});

export type ButtonVariants = RecipeVariants<typeof buttonStyles>;