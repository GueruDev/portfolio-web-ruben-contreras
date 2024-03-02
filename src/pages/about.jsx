import styled from 'styled-components';
import { Section } from "../components/section";
import rubenContreras from '../img/ruben-contreras2.png';

const HeroSection = styled.div`
    width: clamp(300px,90%,1300px);
    height: 100vh;
    margin: 20vh 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    @media( width < 900px){
        grid-template-columns: 1fr;
    }
`
const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    & > div > h2{
        font-size:clamp(2rem, 2vw, 5rem);
    }
    & > p{
        font-size: clamp(2rem, 2vw, 3rem);
        text-align: end;
    }
    @media( width < 900px){
        order: 1;
        width: clamp(250px,80%,800px);
        margin: 0 auto;
    }
`
const HeroTextTitleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .hero-text__divisor{
        height: 2px;
        width: 100%;
        background-color: var(--primary-bg-color);
    }
    @media( width < 900px){
        /* width: clamp(250px,70%,500px); */
    }
    `
const ImgContainer = styled.div`
    position: relative;
    place-self: end end;
    & > img{
        position: relative;
        bottom: -10px;
        width: clamp(250px,70vw,700px);
    }
    @media( width < 900px){
        /* position: fixed;  */
        order: 2;
        place-self: end center;
        & > img{
            width: clamp(250px,40vh,400px);
            right: unset;
        }
        .image-bg__back, .image-bg__front{
            display: none;
        }
    }
`

export function About() {
    return (
        <Section >
            <HeroSection>
                <ImgContainer>
                    <img src={rubenContreras} alt="Ruben Contreras" />
                </ImgContainer>
                <HeroText>
                    <HeroTextTitleContainer>
                        <h2>About me</h2>                        
                        <div className="hero-text__divisor"></div>
                    </HeroTextTitleContainer>
                    <p>
                        Hi there!, my name is Ruben,
                        and I’m a developer from Peru
                        with a passion for creating
                        web application. Using the
                        latest technologies I can
                        provide the development
                        service that you are looking
                        for !
                    </p>
                </HeroText>
            </HeroSection>
        </Section>
    );
}
