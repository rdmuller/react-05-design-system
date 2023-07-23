import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";

export const boxStyle = style([
	sprinkles({
		backgroundColor: "gray800",
		borderRadius: "md",
		padding: 6,
		borderColor: "gray600",
		borderStyle: "solid",
	}),
	{
		borderWidth: "1px"
	}
]);