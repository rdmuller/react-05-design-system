import { colors, fontSizes, fonts, fontWeights, lineHeights, radii, space } from "@ignite-ui/tokens";
import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
	colors: colors,
	fonts: fonts, 
	fontSizes: fontSizes,
	fontWeights: fontWeights,
	lineHeights: lineHeights, 
	radii: radii, 
	space: space
});

// https://github.com/vanilla-extract-css/vanilla-extract/discussions/371
// https://storybook.js.org/recipes/@vanilla-extract/css