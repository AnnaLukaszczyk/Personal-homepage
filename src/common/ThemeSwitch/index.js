import { Wrapper, Box, Text, Icon } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeSwitch = () => {
	return (
		<Wrapper>
			<Box>
				<Text>
					Dark mode off
				</Text>
                <Icon />
			</Box>
		</Wrapper>
	);
};
