import { styleIcon } from "./styled";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";
import {ReactComponent as LinkedInIcon} from "./icons/linkedin.svg";

export const socials = [
    {
        name: "Facebook",
        url: "http://facebook.com",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "Github",
        url: "http://github.com",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Instagram",
        url: "http://instagram.com",
        Icon: styleIcon(InstagramIcon),
    },
    {
        name: "Linkedin",
        url: "http://linkedin.com",
        Icon: styleIcon(LinkedInIcon),
    }
];