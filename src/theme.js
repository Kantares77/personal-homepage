const colorNames = {
    white: "#FFFFFF",
    mercury: "#E5E5E5",
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

    },
    themeSwitch: {
        background: colorNames.mercury,
        icon: colorNames.white,
    }
};