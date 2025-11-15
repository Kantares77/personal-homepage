import { AuthorPicture, ButtonIcon, Icon, Name, StyledButtonLink, Summary, ThisIs, Wrapper } from "./styled";
import faceIcon from "./faceIcon.png";
import laptopIcon from "./laptopIcon.png";
import { email } from "../email";

export const MainInformation = () => (
    <Wrapper>
        <AuthorPicture alt="Kantares" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Marcin Kantarski</Name>
            <Summary>
                <Icon src={faceIcon} alt="" />
                <Icon src={laptopIcon} alt="" />
                I'm a begginer Frontend Developer......ect...............................
            </Summary>
            <StyledButtonLink href={`mailto${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);