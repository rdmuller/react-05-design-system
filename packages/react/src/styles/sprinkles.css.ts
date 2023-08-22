import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from "@rdmuller-ignite-ui/tokens";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export const spaces = space;

const responsiveProperties = defineProperties({
	properties: {
		fontSize: fontSizes,
		fontWeight: fontWeights,
		fontFamily: fonts,
		lineHeight: lineHeights,
		borderRadius: radii,
		padding: space,
		paddingTop: space,
		paddingBottom: space,
		paddingLeft: space,
		paddingRight: space,
		marginTop: space,
		marginBottom: space,
		marginLeft: space,
		marginRight: space,
	}
});

const unconditionalProperties = defineProperties({
	properties: {
		fontSize: fontSizes,
		fontWeight: fontWeights,
		fontFamily: fonts,
		lineHeight: lineHeights,
		borderRadius: radii,
		borderWidth: ["2px"],
		borderStyle: ["none", "solid"],
		padding: space,
		paddingTop: space,
		paddingBottom: space,
		paddingLeft: space,
		paddingRight: space,
		marginTop: space,
		marginBottom: space,
		marginLeft: space,
		marginRight: space,
		width: space,
		height: space,
		right: space,
		top: space,
		bottom: space,
		left: space,
		gap: space,
	}
});

const colorProperties = defineProperties({
	properties: {
		color: colors,
		backgroundColor: colors,
		borderColor: colors,
	}
});
  
export const sprinkles = createSprinkles(
	responsiveProperties,
	unconditionalProperties,
	colorProperties
);