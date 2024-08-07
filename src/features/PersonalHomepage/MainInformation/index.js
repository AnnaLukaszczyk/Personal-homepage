import { Button } from "../ButtonLink";
import annaLukaszczykProfile from "./profile.jpg";
import { email } from "../email";
import { Wrapper, Photo, ThisIs, Name, Summary, Envelope } from "./styled";

export const MainInformation = () => (
	<Wrapper>
		<Photo src={annaLukaszczykProfile} alt="Zdjęcie Anny Łukaszczyk" />
		<div>
			<ThisIs>This is</ThisIs>
			<Name>Anna Łukaszczyk</Name>
			<Summary>
				👩‍🦰💻 I'm a passionate Frontend Developer with a strong interest in
				React, currently looking for new job opportunities.
			</Summary>
			<Button href={`mailto:${email}`} title={email}>
				<Envelope />
				Hire me
			</Button>
		</div>
	</Wrapper>
);
