const colorNames = {
    white: "#FFFFFF",
    mercury: "#E5E5E5",
    whiteLilac: "#FBFBFE",
    porcelain: "#F2F3F4",
    blumine: "#1F5189",
    scienceBlue: "#0366D6",
    dodgerBlue: "#2188FF",
    lightBlue: "#8CC2FF",
    tropicalBlue: "#CDE0F7",
    blueGray: "#6D93BE",
    iron: "#D1D5DA4D",
    tundora: "#414141",
    mistyGray: "#6D6D6D",
    slateGray: "#6E7E91",
    dark: "#252525",
    darkLighter: "#313131",
};

const common = {
    breakpoints: {
        mobileMax: 767,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadiusSmall: "4px",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.dark,
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGray,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.iron,
            shadow: colorNames.lightBlue,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.mercury,
        tile: {
            border: colorNames.porcelain,
            borderHover: colorNames.tropicalBlue,
            header: colorNames.scienceBlue,
        },
        themeSwitch: {
            background: colorNames.mercury,
            icon: colorNames.white,
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.dark,
            text: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.iron,
            shadow: colorNames.blueGray,
        },
        boxBackground: colorNames.darkLighter,
        headerLine: colorNames.tundora,
        tile: {
            border: colorNames.tundora,
            borderHover: colorNames.blumine,
            header: colorNames.white
        },
        themeSwitch: {
            background: colorNames.mistyGray,
            icon: colorNames.dark,
        },
    },
};