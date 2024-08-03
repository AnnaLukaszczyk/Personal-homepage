import styled from "styled-components";

export const ButtonLink = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 12px 16px;
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.buttonLink.text};
	border-radius: 4px;
	text-decoration: none;
	cursor: pointer;
	transition: box-shadow 0.3s;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
		padding: 8px 12px;
	}

	&:hover {
		box-shadow: 4px 4px 0 ${({ theme }) => theme.colors.buttonLink.shadow},
			-4px -4px 0 ${({ theme }) => theme.colors.buttonLink.shadow},
			4px -4px 0 ${({ theme }) => theme.colors.buttonLink.shadow},
			-4px 4px 0 ${({ theme }) => theme.colors.buttonLink.shadow};
	}
`;
