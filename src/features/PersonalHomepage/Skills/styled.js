import styled from "styled-components";
import { ReactComponent as BulletImage } from "./bullet.svg";

export const Section = styled.section`
	padding: 32px;
	margin-top: 72px;
	max-width: 1216px;
	background: ${({ theme }) => theme.colors.boxBackground};
	box-shadow: 0 0 16px ${({ theme }) => theme.colors.boxShadow};
	border-radius: 6px;
`;

export const StyledHeader = styled.h2`
	padding-bottom: 14px;
	margin: 0;
	font-size: 30px;
	font-weight: 900;
	color: ${({ theme }) => theme.colors.textPrimary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 8px 32px;
	padding: 0;
	margin: 32px 0 0 0;
	list-style: none;
`;

export const Item = styled.li`
display: flex;
align-items: center;`;

export const Bullet = styled(BulletImage)`
margin-right: 16px`;
