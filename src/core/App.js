import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight } from "./theme";
import { Normalize } from "styled-normalize";
import { PersonalHomepage } from "../features/PersonalHomepage";

function App() {
	return (
		<ThemeProvider theme={themeLight}>
			<Normalize />
			<GlobalStyle />
			<PersonalHomepage />
		</ThemeProvider>
	);
}

export default App;
