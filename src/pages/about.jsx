import styled from 'styled-components';
import { Section } from "../components/section";

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

const ProfileText = styled.p`
    text-align: center;
    max-width: 800px;
`;

const TimeLineContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TimeLineItem = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    padding: 10px 0;
`;

export function About() {
    return (
        <Section >
            <ProfileContainer>
                <ProfileImage src="path_to_your_image" alt="Your Name" />
                <ProfileText>
                    Aquí puedes escribir sobre ti y tu experiencia profesional.
                </ProfileText>
            </ProfileContainer>
            <TimeLineContainer>
                <TimeLineItem>
                    <span>Fecha de inicio - Fecha de fin</span>
                    <span>Estudié y/o trabajé en tal lugar</span>
                </TimeLineItem>
                {/* Puedes agregar más elementos de TimeLineItem según sea necesario */}
            </TimeLineContainer>
        </Section>
    );
}
