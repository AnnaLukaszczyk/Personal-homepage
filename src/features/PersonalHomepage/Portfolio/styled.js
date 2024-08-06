import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Section = styled.section`
	margin-top: 72px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		margin-top: 48px;
	}
`;

export const Header = styled.header`
	text-align: center;
`;

export const StyledGithubIcon = styled(GithubIcon)`
	color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderTitle = styled.h2`
	margin: 12px 0 8px;
	font-size: 30px;
	font-weight: 900;
	color: ${({ theme }) => theme.colors.textPrimary};

	@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		font-size: 20px;
	}
`;

export const MyRecentProjects = styled.h3`
	margin: 0 0 24px;
	font-size: 20px;
	font-weight: normal;
	color: ${({ theme }) => theme.colors.textPrimary};

	@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		font-size: 17px;
	}
`;
