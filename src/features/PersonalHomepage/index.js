import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skilks";
import { Container } from "./styled";

export const PersonalHomepage = () => (
	<Container>
		<ThemeSwitch />
		<MainInformation />
		<main>
			<Skills title={"My skillset includes 🛠️"}/>
			<Skills title={"What I want to learn next 🚀"}/>
		</main>
	</Container>
);
