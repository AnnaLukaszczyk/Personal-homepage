import styled from "styled-components";

export const List = styled.ul`
	margin-top: 24px;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 32px;
	list-style: none;
`;

export const Tile = styled.li`
	padding: 56px;
	background: ${({ theme }) => theme.colors.boxBackground};
	border: 6px solid ${({ theme }) => theme.colors.tile.border};
	border-radius: 6px;
	transition: border-color 0.3s;

	&:hover {
		border-color: ${({ theme }) => theme.colors.tile.borderHover};
	}
`;

export const Name = styled.h3`
	margin: 0;
	font-size: 24px;
	color: ${({ theme }) => theme.colors.tile.header};
`;

export const Description = styled.p`
	margin: 24px 0;
	line-height: 1.4;
`;

export const Links = styled.dl`
	margin: 0;
	display: grid;
	grid-gap: 8px;
	line-height: 1.6;
`;

export const LinkRow = styled.div`
	display: grid;
	grid-template-columns: 60px auto;
	grid-gap: 8px;
`;

export const LinkValue = styled.dd`
	margin: 0;
`;

export const Link = styled.a`
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.tile.linkBorderBottom};

    &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
`;
