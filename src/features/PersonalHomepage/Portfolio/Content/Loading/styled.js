import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
to {
    transform: rotate(360deg);
}
`;

export const Wrapper = styled.div`
	margin: 88px;
	text-align: center;
`;
export const LoadingInfo = styled.p`
	color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledSpinner = styled(Spinner)`
	margin-top: 48px;
	animation: ${rotate} 1s linear infinite;
	color: ${({ theme }) => theme.colors.primary};
`;
