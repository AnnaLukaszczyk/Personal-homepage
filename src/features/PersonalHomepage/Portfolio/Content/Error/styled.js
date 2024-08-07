import styled from "styled-components";
import { ReactComponent as WarningIcon } from "./warning.svg";

export const Wrapper = styled.div`
	display: grid;
	justify-items: center;
	text-align: center;
	margin: 88px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		margin: 32px 0 0;
	}
`;

export const StyledWarningIcon = styled(WarningIcon)`
	width: 86px;
	height: 86px;
	color: red;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		width: 60px;
		height: 60px;
	}
`;

export const Header = styled.header`
	margin-top: 16px;
	font-size: 24px;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.textPrimary};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		font-size: 17px;
	}
`;

export const Paragraph = styled.p`
	margin: 32px 0;
	font-size: 20px;
	line-height: 1.4;
	color: ${({ theme }) => theme.colors.textPrimary};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		font-size: 16px;
	}
`;
