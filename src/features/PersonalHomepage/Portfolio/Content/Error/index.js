import { Button } from "../../../ButtonLink";
import { Wrapper, StyledWarningIcon, Header, Paragraph } from "./styled";

export const Error = () => (
	<Wrapper>
		<StyledWarningIcon />
		<Header>Ooops! Something went wrong...</Header>
		<Paragraph>
			Sorry, failed to load Github projects.
			<br />
			You can check them directly on Github.
		</Paragraph>
		<Button>Go to Github</Button>
	</Wrapper>
);
