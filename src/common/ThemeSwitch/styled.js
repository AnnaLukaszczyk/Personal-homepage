import styled from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Box = styled.button`
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
`;

export const Icon = styled(SunIcon)`
	color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
