import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { keyframes, style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

const slideIn = keyframes({
	"from": {
		transform: "translateX(100%)"
	},
	"to": {
		transform: "translateX(0)"
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
		overflow: "hidden",
	}
]);

const baseToastContainer = style([
	sprinkles({
		//backgroundColor: "gray800",
		//borderColor: "gray600",
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 5,
		paddingRight: 5,
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

export const toastContainer = recipe({
	base: baseToastContainer,
	variants: {
		status: {
			error: sprinkles({
				backgroundColor: "red900",
				borderColor: "red500",
			}),
		
			success: sprinkles({
				backgroundColor: "ignite700",
				borderColor: "ignite500",
			}),

			info: sprinkles({
				backgroundColor: "gray800",
				borderColor: "gray600",
			}),
		}
	},

	defaultVariants: {
		status: "info"
	}
});

export type ToastVariants = RecipeVariants<typeof toastContainer>;

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