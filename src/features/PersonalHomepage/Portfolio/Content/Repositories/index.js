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

export const Repositories = ({ repositories }) => (
	<List>
		{repositories.map(({ id, name, description, homepage, html_url }) => (
			<Tile key={id}>
				<Name>{name}</Name>
				<Description>{description}</Description>
				<Links>
					{!!homepage && (
						<LinkRow>
							<dt>Demo:</dt>
							<LinkValue>
								<Link
									href={`https://annalukaszczyk.github.io/my-todo-list-react/`}
									target="_blank"
									rel="noreferrer">
									https://annalukaszczyk.github.io/my-todo-list-react/
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
		))}
	</List>
);
