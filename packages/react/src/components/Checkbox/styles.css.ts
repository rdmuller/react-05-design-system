import { style, keyframes } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { colors } from "@ignite-ui/tokens";

const slideIn = keyframes({
	"from": {
		transform: "translateY(-100%)"
	},
	"to": {
		transform: "translateY(0)"
	}
});

const slideOut = keyframes({
	"from": {
		transform: "translateY(0)"
	},
	"to": {
		transform: "translateY(-100%)"
	}
});

export const checkboxContainerStyles = style([
	sprinkles({
		width: 6,
		height: 6,
		backgroundColor: "gray900",
		borderColor: "gray900",
		borderStyle: "solid",
		borderRadius: "xs",
		borderWidth: "2px"
	}),
	{
		padding: 0,
		lineHeight: 0,
		cursor: "pointer",
		overflow: "hidden",
		boxSizing: "border-box",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		":focus": {
			borderColor: colors.ignite300,
		},
		selectors: {
			"&[data-state=\"checked\"]": {
				backgroundColor: colors.ignite300
			}
		}
	}
]);

export const checkboxIndicatorStyles = style([
	sprinkles({
		color: "white",
		width: 4,
		height: 4,
	}),
	{
		selectors: {
			"&[data-state=\"checked\"]": {
				animation: slideIn,
				animationDuration: "200ms",
				animationTimingFunction: "ease-out"
			},
			"&[data-state=\"unchecked\"]": {
				animation: slideOut,
				animationDuration: "200ms",
				animationTimingFunction: "ease-out"
			}
		}
	}
]);