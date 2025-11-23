import { Bullet, Item, List, Section, StyledHeader } from "./styled";

export const Skills = ({ title, skills }) => (
    <Section>
        <StyledHeader>{title}</StyledHeader>
        <List>
            {skills.map((element) => (
                <Item key={element.id}>
                    <Bullet />
                    {element.skill}
                </Item>
            ))}
        </List>
    </Section>
);