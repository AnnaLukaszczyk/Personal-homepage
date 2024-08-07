import { ButtonLink } from "./styled";

export const Button = ({ href, title, children }) => {
	return (
		<ButtonLink href={href} title={title}>
			{children}
		</ButtonLink>
	);
};
