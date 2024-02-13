import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Section } from "../components/section";

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const Message = styled.p`
    text-align: center;
    font-size: 1.2rem;
`;

const SocialButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    text-decoration: none;

    &:hover {
        background-color: #005582;
    }
`;

export function Contact() {
    return (
        <Section>
            <ContactContainer>
                <Message>
                    Me alegra mucho que estés interesado en contactarme. También puedes ver mis redes sociales :)!
                </Message>
                <SocialButton href="https://www.linkedin.com/in/gueru/" target="_blank">
                    <FaLinkedin />
                    LinkedIn
                </SocialButton>
                <SocialButton href="https://twitter.com/GueruDev" target="_blank">
                    <FaTwitter />
                    Twitter
                </SocialButton>
                <SocialButton href="https://github.com/GueruDev" target="_blank">
                    <FaGithub />
                    GitHub
                </SocialButton>
            </ContactContainer>
        </Section>
    );
}
