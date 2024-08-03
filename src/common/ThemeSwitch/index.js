import { Wrapper, Box, Text, Button, Icon } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeSwitch = () => {
	const isDarkTheme = useSelector(selectIsDarkTheme);
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<Box>
				<Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
				<Button onClick={() => dispatch(toggleTheme())}>
					<Icon />
				</Button>
			</Box>
		</Wrapper>
	);
};
