import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../../features/PersonalHomepage";

const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
            <Normalize />
            <GlobalStyle />
            <PersonalHomepage />
        </ThemeProvider>
    );
};

export default App;