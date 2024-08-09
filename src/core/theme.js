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
	lightGray: "#6e7e9144",
	mineshaftLighter: "#313131",
	tundora: "#414141",
	porcelain: "#F2F3F4",
	tropicalBlue: "#CDE0F7",
	blumine: "#1F5189",
	primaryAlpha: "#0366d836",
	dodgerBlueAlpha: "#2188FF56",
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
		boxBackground: colorNames.white,
		boxShadow: colorNames.lightGray,
		headerLine: colorNames.mercury,
		themeSwitch: {
			background: colorNames.white,
			icon: colorNames.white,
			border: colorNames.slateGray,
			iconBox: colorNames.slateGray,
		},
		tile: {
			border: colorNames.porcelain,
			borderHover: colorNames.tropicalBlue,
			header: colorNames.scienceBlue,
			linkBorderBottom: colorNames.primaryAlpha,
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
		boxBackground: colorNames.mineshaftLighter,
		boxShadow: "none",
		headerLine: colorNames.tundora,
		themeSwitch: {
			background: colorNames.black,
			icon: colorNames.black,
			border: colorNames.white,
			iconBox: colorNames.white,
		},
		tile: {
			border: colorNames.tundora,
			borderHover: colorNames.blumine,
			header: colorNames.white,
			linkBorderBottom: colorNames.dodgerBlueAlpha,
		},
	},
};
