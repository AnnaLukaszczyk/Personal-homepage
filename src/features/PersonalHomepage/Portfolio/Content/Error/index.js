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
		<Button href={`https://github.com/AnnaLukaszczyk`} target="_blank" title="Go to Anna Lukaszczyk's Github profile">Go to Github</Button>
	</Wrapper>
);
