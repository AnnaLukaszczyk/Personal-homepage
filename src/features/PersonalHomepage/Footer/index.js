import { Wrapper, LetsTalk, EmailLink, Paragraph } from "./styled";
import { email } from "../email";

export const Footer = () => (
	<Wrapper>
		<LetsTalk>Let's talk!</LetsTalk>
		<EmailLink href={`mailto:${email}`}>{email}</EmailLink>
        <Paragraph>
				I'm always open to new projects whenever I have time. If you have a website, dashboard or a mobile app in mind and need some help to make your ideas come to life, feel free to contact me ✉️🤞
			</Paragraph>
	</Wrapper>
);
