import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { keyframes, style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

const slideIn = keyframes({
	"from": {
		//transform: "translateX(100%)"
		width: 0,
	},
	"to": {
		width: "22.5rem",
		//transform: "translateX(0)"
	}
});

const slideOut = keyframes({
	"from": {
		transform: "translateX(0)"
},
	"to": {
		transform: "translateX(100%)"
	}
});

export const toastViewport = style([
	sprinkles({
		gap: 2,        
		marginRight: 8,
		marginBottom: 8,
	}),
	{
		display: "flex",
		flexDirection: "column",
		bottom: 0,
		right: 0,
		position: "absolute",
		zIndex: 999999999,
		listStyle: "none",
		outline: "none",
		width: "fit-content",
	}
]);

export const toastContainer = style([
	sprinkles({
		backgroundColor: "gray800",
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 5,
		paddingRight: 5,
		borderColor: "gray600",
		gap: 1,
	}),
	{
		display: "flex",
		alignContent: "space-between",
		borderRadius: "0.375rem",
		borderWidth: "1px",
		borderStyle: "solid",
		width: "22.5rem",
		selectors: {
			"&[data-state=\"open\"]": {
				animation: slideIn,
				animationDuration: "200ms",
				animationTimingFunction: "ease-out"
			},
			"&[data-state=\"closed\"]": {
				animation: slideOut,
				animationDuration: "200ms",
				animationTimingFunction: "ease-out"
			}
		}
	}
]);

export const toastTitle = sprinkles({
	color: "white",
	fontFamily: "default",
	fontSize: "xl",
	fontWeight: "bold",
	lineHeight: "base"
});

export const toastDescription = sprinkles({
	color: "gray200",
	fontFamily: "default",
	fontSize: "sm",
	fontWeight: "regular",
	lineHeight: "base"
});

export const ToastButtonClose = style([
	sprinkles({
		color: "gray200",
		right: 4,
	}),
	{
		cursor: "pointer",
		position: "absolute",
	}
]);