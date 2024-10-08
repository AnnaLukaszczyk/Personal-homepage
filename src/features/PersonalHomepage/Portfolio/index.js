import { useDispatch, useSelector } from "react-redux";
import { Content } from "./Content";
import { Section, Header, StyledGithubIcon, HeaderTitle, MyRecentProjects } from "./styled";
import { githubUsername } from "./githubUsername"
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";
import { useEffect } from "react";

export const Portfolio = () => {
const dispatch = useDispatch();
const repositoriesStatus = useSelector(selectRepositoriesStatus)
const repositories = useSelector(selectRepositories)

useEffect(() => {
	dispatch(fetchRepositories(githubUsername));
}, [dispatch]);

	return (
		<Section>
			<Header>
				<StyledGithubIcon />
				<HeaderTitle>Portfolio</HeaderTitle>
				<MyRecentProjects>My recent projects</MyRecentProjects>
			</Header>
			<Content status={repositoriesStatus} repositories={repositories} />
		</Section>
	);
};
