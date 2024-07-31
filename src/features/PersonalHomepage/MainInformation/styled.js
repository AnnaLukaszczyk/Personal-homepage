import styled from "styled-components";

export const Wrapper = styled.header`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 72px;
	align-items: center;
    width: 1120px;
	border: 1px solid red;
`;

export const Photo = styled.img`
	width: 25vw;
	border-radius: 50%;
`;

export const ThisIs = styled.p`
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
`;

export const Name = styled.h1`
margin-top: 12px;
	font-size: 38px;
	font-weight: 900;
	color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Summary = styled.p`
margin: 36px 0 0 0;
font-size: 20px;
line-height: 1.5;
`;
