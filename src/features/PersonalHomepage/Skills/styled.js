import styled from "styled-components";
import { ReactComponent as BulletImage } from "./bullet.svg";

export const Section = styled.section`
	padding: 32px;
	margin-top: 72px;
	max-width: 1216px;
	background: ${({ theme }) => theme.colors.boxBackground};
	box-shadow: 0 0 16px ${({ theme }) => theme.colors.boxShadow};
	border-radius: 6px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		padding: 16px;
		margin-top: 48px;
	}
`;

export const StyledHeader = styled.h2`
	padding-bottom: 14px;
	margin: 0;
	font-size: 30px;
	font-weight: 900;
	color: ${({ theme }) => theme.colors.textPrimary};
	border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
		font-size: 28px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		padding-bottom: 10px;
		font-size: 20px;
	}
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 8px 32px;
	padding: 0;
	margin: 32px 0 0 0;
	list-style: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		grid-template-columns: 1fr;
		margin: 14px 0 0 0;
	}
`;

export const Item = styled.li`
	display: flex;
	align-items: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
		font-size: 18px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		font-size: 16px;
	}
`;

export const Bullet = styled(BulletImage)`
	margin-right: 16px;
`;
