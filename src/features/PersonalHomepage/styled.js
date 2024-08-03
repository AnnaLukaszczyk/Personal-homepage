import styled from "styled-components";

export const Container = styled.div`
	padding: 0 40px;
	max-width: 1216px;
	margin: 120px auto;

	@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
			margin: 20px 0;
			padding: 0 18px;
		}
`;
