import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

export const Wrapper = styled.div`
	margin: 88px;
	min-width: 284px;
	text-align: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		font-size: 17px;
		margin: 32px 0 0;
	}
`;

export const LoadingInfo = styled.p`
	color: ${({ theme }) => theme.colors.textPrimary};
	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		font-size: 15px;
	}
`;

export const StyledSpinner = styled(Spinner)`
	margin-top: 48px;
	animation: ${rotate} 1s linear infinite;
	color: ${({ theme }) => theme.colors.primary};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
		margin-top: 16px;
		width: 80px;
	}
`;
