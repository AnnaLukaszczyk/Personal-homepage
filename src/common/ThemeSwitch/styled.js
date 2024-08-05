import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	background: none;
	border: none;
`;

export const Text = styled.span`
	margin-right: 10px;
	font-size: 12px;
	font-weight: bold;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.site.text};

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
		font-size: 10px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		display: none;
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	padding: 3px;
	width: 48px;
	background: ${({ theme }) => theme.colors.themeSwitch.background};
	border: 1px solid ${({ theme }) => theme.colors.themeSwitch.border};
	border-radius: 30px;
	outline-offset: 4px;
	cursor: pointer;
`;

export const IconBox = styled.div`
	display: flex;
	padding: 3px;
	background: ${({ theme }) => theme.colors.themeSwitch.iconBox};
	border-radius: 50%;
	transition: transform 0.3s;

	${({ $moveToRight }) =>
		$moveToRight &&
		css`
			transform: translateX(20px);
		`}
`;

export const Icon = styled(SunIcon)`
	color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
