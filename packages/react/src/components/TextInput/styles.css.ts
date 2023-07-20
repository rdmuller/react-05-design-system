import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { colors } from "@rdmuller-ignite-ui/tokens";

export const textInputContainerStyle = style([
	sprinkles({
		backgroundColor: "gray900",
		paddingBottom: 3,
		paddingTop: 3,
		paddingLeft: 4,
		paddingRight: 4,
		borderRadius: "sm",
		borderStyle: "solid",
		borderWidth: "2px",
		borderColor: "gray900",
	}),
	{
		boxSizing: "border-box",
		display: "flex",
		alignItems: "baseline",
		selectors: {
			"&:has(input:focus)": {
				borderColor: colors.ignite300
			},
			"&:has(input:disabled)": {
				opacity: 0.5,
				cursor: "not-allowed"
			}
		}
	}
]);

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