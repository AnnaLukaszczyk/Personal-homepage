import { Item, Link, List } from "./styled";
import { socials } from "./icons/socials";

export const SocialIcons = () => (
	<List>
		{socials.map(({ name, url, Icon }) => (
			<Item key={name}>
				<Link href={url} title={name}>
					<Icon />
				</Link>
			</Item>
		))}
	</List>
);
