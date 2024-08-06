import { Content } from "./Content";
import {
	Section,
	Header,
	StyledGithubIcon,
	HeaderTitle,
	MyRecentProjects,
} from "./styled";

export const Portfolio = () => (
	<Section>
		<Header>
			<StyledGithubIcon />
			<HeaderTitle>Portfolio</HeaderTitle>
			<MyRecentProjects>My recent projects</MyRecentProjects>
		</Header>
		<Content />
	</Section>
);
