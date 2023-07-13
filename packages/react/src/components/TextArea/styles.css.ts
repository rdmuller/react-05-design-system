import { colors } from "@ignite-ui/tokens";
import { sprinkles } from "../../styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const textAreaStyles = style([
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

		fontFamily: "default",
		fontSize: "sm",
		color: "white",
		fontWeight: "regular",
	}),
	{
		resize: "vertical",
		boxSizing: "border-box",
		selectors: {
			"&:focus": {
				borderColor: colors.ignite300,
				outline: 0,
			},
			"&:disabled": {
				opacity: 0.5,
				cursor: "not-allowed"
			},
			"&:placeholder": {
				color: colors.gray400
			},
		}
	}
]);