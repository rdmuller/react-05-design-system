import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const tooltipContentStyle = style([
	sprinkles({
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 4,
		paddingRight: 4,
		backgroundColor: "gray900",
		color: "gray100",
		fontFamily: "default",
		fontSize: "sm",
		lineHeight: "short",
	}),
	{
		borderRadius: "5px",
	}
]);