import { colors } from "@rdmuller-ignite-ui/tokens";
import { style } from "@vanilla-extract/css";

export const tooltipContentStyle = style([
	{
		borderRadius: "4px",
		padding: "10px 15px",
		fontSize: "15px",
		lineHeight: 1,
		color: colors.white,
		backgroundColor: colors.gray900,
		/*boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px";
        userSelect: none,
        animationDuration: 400ms,
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1),
        will-change: transform, opacity,
    */}
]);
