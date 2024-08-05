const colorNames = {
	scienceBlue: "#0366D6",
	white: "#FFFFFF",
	whiteLilac: "#FBFBFE",
	black: "#252525",
	slateGray: "#6E7E91",
	anakiwa: "#8CC2FF",
	dodgerBlue: "#2188FF",
	shipCove: "#6D93BE",
	mercury: "#e5e5e5",
};

const common = {
	breakpoints: {
		mobileMax: 767,
		tabletVerticalMax: 991,
		tabletHorizontalMax: 1199,
	},
};

export const themeLight = {
	...common,
	colors: {
		primary: colorNames.scienceBlue,
		textPrimary: colorNames.black,
		site: {
			background: colorNames.whiteLilac,
			text: colorNames.slateGray,
		},
		buttonLink: {
			text: colorNames.white,
			shadow: colorNames.anakiwa,
		},
		themeSwitch: {
			background: colorNames.white,
			icon: colorNames.white,
			border: colorNames.slateGray,
			iconBox: colorNames.slateGray,
		},
	},
};

export const themeDark = {
	...common,
	colors: {
		primary: colorNames.dodgerBlue,
		textPrimary: colorNames.white,
		site: {
			background: colorNames.black,
			text: colorNames.white,
		},
		buttonLink: {
			text: colorNames.white,
			shadow: colorNames.shipCove,
		},
		themeSwitch: {
			background: colorNames.black,
			icon: colorNames.black,
			border: colorNames.white,
			iconBox: colorNames.white,
		},
	},
};
