import styled from "styled-components";

export const Section = styled.section`
	padding: 32px;
	margin-top: 72px;
	max-width: 1216px;
	background: ${({ theme }) => theme.colors.boxBackground};
	box-shadow: 0 0 16px ${({ theme }) => theme.colors.boxShadow};
`;

export const StyledHeader = styled.h2`
	padding-bottom: 14px;
	font-size: 30px;
	font-weight: 900;
	color: ${({ theme }) => theme.colors.textPrimary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
`;
