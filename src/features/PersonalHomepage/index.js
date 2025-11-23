import { ThemeSwitch } from "../../common/ThemeSwitch";
import { Footer } from "./Footer";
import { MainInformation } from "./MainInformation";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { Container, Icon } from "./styled";
import toolsIcon from "./toolsIcon.png";
import rocketIcon from "./rocketIcon.png";
import { currentSkills, nextSkills } from "./skillsData";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInformation />

        <main>
            <Skills
                title={(
                    <>
                        My skillset includes <Icon src={toolsIcon} alt="" />
                    </>
                )}
                skills={currentSkills}
            />

            <Skills
                title={(
                    <>
                        What I want to learn next <Icon src={rocketIcon} alt="" />
                    </>
                )}
                skills={nextSkills}
            />

            <Portfolio />
        </main>

        <Footer />
    </Container>
);