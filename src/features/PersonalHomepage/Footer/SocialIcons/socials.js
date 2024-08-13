import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";

export const socials = [
	{
		name: "GitHub",
		url: "http://github.com/AnnaLukaszczyk",
		Icon: styleIcon(GithubIcon),
	},
	{
		name: "Facebook",
		url: "https://www.facebook.com/AnnaLukaszczyk222/",
		Icon: styleIcon(FacebookIcon),
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/anna-%C5%82ukaszczyk-7a179b25a/",
		Icon: styleIcon(LinkedInIcon),
	},
];
