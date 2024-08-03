import styled from "styled-components";
import { ReactComponent as envelope } from "../Button/envelope.svg";

export const Wrapper = styled.header`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 72px;
	align-items: center;
	max-width: 1120px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
		grid-gap: 32px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		grid-template-columns: 1fr;
		grid-gap: 16px;
	}
`;

export const Photo = styled.img`
	width: 25vw;
	max-width: 420px;
	max-height: 420px;
	border-radius: 50%;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		width: 160px;
	}
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

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
		font-size: 32px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		font-size: 24px;
	}
`;

export const Summary = styled.p`
	margin: 36px 0 32px 0;
	font-size: 20px;
	line-height: 1.5;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
		font-size: 18px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		margin: 16px 0 24px 0;
		font-size: 16px;
	}
`;

export const Envelope = styled(envelope)`
	margin-right: 12px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
		margin-right: 10px;
	}
`;
