import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Section } from "../../components/section";
import { StyledForm } from './form_style';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const Message = styled.p`
    text-align: center;
    font-size: clamp(2.5rem, 2vw, 5rem);
    font-weight: bold;
`;

const SocialButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    background-color: #000;
    color: var(--primary-font-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    text-decoration: none;

    &:hover {
        background-color: #005582;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    gap: 2rem;
`

export function Contact() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_zinlwnt', 'template_qa0a7zn', form.current, {
                publicKey: 'tQ6Dc1xJyJpRsjHoN',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <Section>
            <ContactContainer>
                <Message>
                    Do you want to contact me?
                </Message>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <label className='form-label' htmlFor="subject" >Subject</label>
                    <input required className='form-textInput' placeholder='Tell me, what do you need?' type="text" name="subject" id='subject' />
                    <label className='form-label' htmlFor="from_name" >Name</label>
                    <input required className='form-textInput' placeholder='Your name or company' type="text" name="from_name" id='from_name' />
                    <label className='form-label' htmlFor='from_email' >Email</label>
                    <input required className='form-textInput' placeholder='Here your email goes' type="email" name="from_email" id='from_email' />
                    <label className='form-label' htmlFor="message">Message</label>
                    <textarea className='form-textArea' placeholder='Your message, be brief and detailed.' name="message" id='message' />
                    <button className='form-btnSubmit' required type="submit" value="Let's get in touch">Let's get in touch</button>
                </StyledForm>
                <SocialContainer>
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
                </SocialContainer>
            </ContactContainer>
        </Section>
    );
}
