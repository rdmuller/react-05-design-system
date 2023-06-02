import { style } from "@vanilla-extract/css";
import { vars } from "./index.css";

export const myButton = style({
	fontFamily: vars.fonts.default,
	backgroundColor: vars.colors.gray900,
	borderRadius: vars.radii.md,
	padding: vars.space[4],
	color: "blue",
	fontSize: "5rem",
});