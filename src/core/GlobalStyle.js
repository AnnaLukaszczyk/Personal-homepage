import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*, ::after, ::before {
		box-sizing: inherit;
	}

	body {
		font-family: "Inter", sans-serif;
		background: ${({ theme }) => theme.colors.site.background};
		color: ${({ theme }) => theme.colors.site.text};
		font-size: 18px;
		transition: background-color 0.4s ease, color 0.4s ease;
	}
`;
