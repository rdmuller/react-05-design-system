import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from "@ignite-ui/tokens";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

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

const colorProperties = defineProperties({
	properties: {
		color: colors,
		backgroundColor: colors
	}
});
  
export const sprinkles = createSprinkles(
	responsiveProperties,
	unconditionalProperties,
	colorProperties
);