import { LoadingInfo, StyledSpinner, Wrapper } from "./styled";

export const Loading = () => (
    <Wrapper>
        <LoadingInfo>Please wait, projects are being loaded...</LoadingInfo>
        <StyledSpinner />
    </Wrapper>
)