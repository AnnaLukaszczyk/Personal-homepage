import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight } from "./theme";
import { Normalize } from "styled-normalize";

function App() {
	return (
		<ThemeProvider theme={themeLight}>
			<Normalize />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
