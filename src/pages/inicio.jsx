import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Section } from '../components/section';
import rubenContreras from '../img/ruben-contreras.png';

const slideIn = keyframes`
  0% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const blinkCursor = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${slideIn} 2s ease;
`;

const HeroImage = styled.img`
  width: 30%;
  aspect-ratio:  1 / 1;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const HeroTitle = styled.h1`
  font-size: 12rem;
  margin-bottom: 10px;
`;

const HeroSubtitle = styled.p`
  font-size: 6rem;
  margin-bottom: 20px;
  &:after {
    content: '|';
    animation: ${blinkCursor} 1s infinite;
  }
`;

const HeroSlogan = styled.p`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
`;

export const Inicio = () => {
  const renderCount = useRef(0);

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


  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(`Renderizado ${renderCount.current} veces`);
  });


  return (
    <Section>
      <HeroSection>
        <HeroImage src={rubenContreras} alt="Rubén Contreras Guerrero" />
        <HeroTitle>Ruben Contreras Guerrero</HeroTitle>
        <HeroSubtitle ref={subtitleRef}></HeroSubtitle>
        <HeroSlogan>"Do it ... ORIGINAL...!! Do it DIFFERENT!"</HeroSlogan>
      </HeroSection>
    </Section>
  );
};
