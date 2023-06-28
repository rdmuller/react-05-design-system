import { style, globalStyle } from "@vanilla-extract/css";
import { spaces, sprinkles } from "../../styles/sprinkles.css";

export const avatarContainer = style([
	sprinkles({
		borderRadius: "full",        
		width: 12,
		height: 12,
	}),
	{
		display: "inline-block",
		overflow: "hidden"
	}
]);

export const avatarImage = style([
	{
		width: "100%",
		height: "100%",
		objectFit: "cover",
		borderRadius: "inherit"
	}
]);

export const avatarFallback = style([
	sprinkles({
		backgroundColor: "gray600",
		color: "gray800"
	}),
	{
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}
]);

globalStyle(`${avatarFallback} svg`, {
	width:  spaces[6],
	height: spaces[6],
});