import styled from "styled-components";

export const Wrapper = styled.footer`
	margin-top: 120px;
	max-width: 680px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		margin-top: 48px;
	}
`;

export const LetsTalk = styled.h2`
	margin: 0;
	margin-bottom: 24px;
	font-size: 12px;
	text-transform: uppercase;
`;

export const EmailLink = styled.a`
	font-size: 32px;
	font-weight: 900;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.textPrimary};
	transition: color 0.3s;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		font-size: 18px;
        word-wrap: break-word;
	}
`;

export const Paragraph = styled.p`
	margin-top: 24px;
    font-size: 18px;
	line-height: 1.4;
	color: ${({ theme }) => theme.colors.textPrimary};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		font-size: 14px;
	}
`;
