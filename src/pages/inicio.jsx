import React, { useEffect, useRef } from 'react';
import styled  from 'styled-components';
import { NavLink } from "react-router-dom";
import { Section } from '../components/section';
import rubenContreras from '../img/ruben-contreras.png';

const HeroSection = styled.div`
width: 100%;

`;

const HeroContainer = styled.div`
  width: clamp(300px,90%,1300px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  & > div{
    position: absolute;
    display: grid;
    & > h1, & > p, & >span{
      font-size: clamp(4rem, 4vw, 10rem);
      
      font-weight: bold;
    }
    & > h1{
      color: var(--secondary-font-color);
    }
    & > p{
      height:clamp(4rem, 4vw, 10rem);
    }
    & > span:nth-of-type(1){
      text-align: center;
      color: var(--thirdary-font-color);
    }
    & > span:nth-of-type(2){
      text-align: end;
      color: var(--secondary-bg-color);
    }
    & > button{
      place-self: start;
      margin: 2rem 0;
      padding: .7rem 4rem;
      cursor: pointer;
      
      & > a{
        font-size: clamp(3rem, 2vw, 8rem);
        font-weight: bold;
        text-decoration: none;
        color:var(---primary-btn-color);
      }
      
      background-color: var(--secondary-btn-color);
      border-radius: 50px;
    }
  }
  img{
    grid-column: 3 / 6;
    height: 100vh;
  }
  @media(width < 1170px){
    img{
      grid-column: 2 / 6;
    }
  }
  @media(width < 768px){
    grid-template-columns:unset;
    grid-template-rows: repeat(5, 1fr);
    div{
      grid-column: unset;
      grid-row: 2 / 4;
      position: relative;
      z-index: 10;
      & > h1, & > p, & > span {
        font-size: clamp(3rem, 8vw, 7rem);
      }
      & > p{
        height: clamp(3.7rem, 8vw, 7rem);
        text-align: center;
      }
      & > span:nth-of-type(1){
        text-align: center;
      }
      & > span:nth-of-type(2){
        text-align: start;
      }
      & > button{
        place-self: center;
        & > a{
          font-size: clamp(2rem, 5.5vw, 4rem);
        }
      }
    }
    img{
      position: fixed;
      bottom: 0;
      right: 50%;
      left: 50%;
      transform: translateX(-50%);
      height: clamp(32rem, 60vw, 50rem);
      margin: 0 auto;
      grid-column: unset;
      grid-row: 2 / 3;
    }
  }
`;


export const Inicio = () => {
  const phrases = ['Frontend', 'React Developer','FullStack', 'Designer', 'Self-taught'];
  const subtitleRef = useRef('');
  
  const addLetters = async function(){
    let lastWord = '';
    while (true) {
      let words;
      // Avoid the same word than the last one
      do {
        words = phrases[Math.floor(Math.random() * phrases.length)];
      } while (words === lastWord);
      lastWord = words;

      // Type word
      for (const letter of words) {
        if (!subtitleRef.current) return; // Stop finding this ref
        subtitleRef.current.textContent += letter;
        await new Promise ((resolve) => setTimeout(resolve,100));
      }
      // Wait a second
      await new Promise ((resolve) => setTimeout(resolve,1000));
      // Delete the word letter by letter
      for (let i = 0; i < words.length; i++) {
        if (!subtitleRef.current) return; // Stop finding this ref
        subtitleRef.current.textContent = subtitleRef.current.textContent.slice(0, -1);
        await new Promise ((resolve) => setTimeout(resolve,100));
      }
    }
  };
  useEffect(() => {
    addLetters();
  }, []);

  return (
    <Section>
      <HeroSection>
        <HeroContainer>
          <div>
            <h1>Ruben Contreras</h1>
            <span>a</span>
            <p ref={subtitleRef}></p>
            <span>that you need</span>
            <button type="button">
              <NavLink to="/portfolio-web-ruben-contreras/projects">See my projects</NavLink>
            </button>
            
          </div>
          <img src={rubenContreras} alt="Rubén Contreras Guerrero" />

        </HeroContainer>
      </HeroSection>
    </Section>
  );
};
