import {
	Description,
	Link,
	LinkRow,
	Links,
	LinkValue,
	List,
	Name,
	Tile,
} from "./styled";

export const Repositories = ({ repositories }) => {
	const filteredRepositories = repositories.filter((repo) => repo.description);

	return (
		<List>
			{filteredRepositories.map(
				({ id, name, description, homepage, html_url }) => (
					<Tile key={id}>
						<Name>{name}</Name>
						<Description>{description}</Description>
						<Links>
							{!!homepage && (
								<LinkRow>
									<dt>Demo:</dt>
									<LinkValue>
										<Link
											href={homepage}
											target="_blank"
											rel="noreferrer">
											{homepage}
										</Link>
									</LinkValue>
								</LinkRow>
							)}
							<LinkRow>
								<dt>Code:</dt>
								<LinkValue>
									<Link target="_blank" rel="noreferrer" href={html_url}>
										{html_url}
									</Link>
								</LinkValue>
							</LinkRow>
						</Links>
					</Tile>
				)
			)}
		</List>
	);
};
