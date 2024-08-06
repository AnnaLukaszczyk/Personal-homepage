import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainInformation } from "./MainInformation";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { skills, nextSkills } from "./Skills/skillsData";
import { Container } from "./styled";

export const PersonalHomepage = () => (
	<Container>
		<ThemeSwitch />
		<MainInformation />
		<main>
			<Skills 
				title={"My skillset includes 🛠️"} 
				skills={skills} 
			/>
			<Skills 
				title={"What I want to learn next 🚀"} 
				skills={nextSkills} 
			/>
		</main>
		<Portfolio />
	</Container>
);
