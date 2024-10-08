import { ButtonLink } from "./styled";

export const Button = ({ href, title, target, children }) => (
	<ButtonLink href={href} title={title} target={target}>
		{children}
	</ButtonLink>
);
