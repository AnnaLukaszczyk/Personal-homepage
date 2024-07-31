import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight } from "./theme";

function App() {
	return (
		<ThemeProvider theme={themeLight}>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
