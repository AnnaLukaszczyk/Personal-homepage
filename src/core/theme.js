const colorNames = {
	scienceBlue: "#0366D6",
	white: "#FFFFFF",
	whiteLilac: "#FBFBFE",
	black: "#252525",
	slateGray: "#6E7E91",
	anakiwa: "#8CC2FF",
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
			icon: colorNames.white,
		},
	},
};
