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

export const Repositories = () => (
		<List>
			<Tile>
				<Name>my-todo-list-react</Name>
				<Description>It's a simple task list where you can add your task, mark a task as completed, or remove a task from the list.</Description>
				<Links>
					<LinkRow>
						<dt>Demo:</dt>
						<LinkValue>
                        <Link href={`https://annalukaszczyk.github.io/my-todo-list-react/`} target="_blank" rel="noreferrer">https://annalukaszczyk.github.io/my-todo-list-react/</Link>
						</LinkValue>
					</LinkRow>
                    <LinkRow>
						<dt>Code:</dt>
						<LinkValue>
							<Link href={`https://github.com/AnnaLukaszczyk/my-todo-list-react`} target="_blank" rel="noreferrer">https://github.com/AnnaLukaszczyk/my-todo-list-react</Link>
						</LinkValue>
					</LinkRow>
				</Links>
			</Tile>
		</List>
);
