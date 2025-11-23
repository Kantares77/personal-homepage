import { email } from "../email";
import { SocialIcons } from "./SocialIkons";
import { Address, EmailLink, EmailWrapper, LetsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </EmailWrapper>
            <Paragraph>
                Cos tam cos tam&nbsp;cos tam cos tam
            </Paragraph>
            <SocialIcons />
        </Address>
    </Wrapper>
);