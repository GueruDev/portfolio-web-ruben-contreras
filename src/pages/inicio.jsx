// inicio.jsx
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Section } from '../components/section';

const StyledH1 = styled.h1`
  font-size: 18rem;
`;

const StyledSpan = styled.span`
  transition: color ease 1s;
`;

export const Inicio = () => {
  const colors = ['#c501e2', '#2ef8a0', '#ff0534', '#f82d97', '#01c4e7'];
  const [color1, setColor1] = useState('#fff');
  const [color2, setColor2] = useState('#fff');
  const timer = useRef(null);
  const canChangeColor = useRef(true);

  const selectDistinctColors = () => {
    let newColors = [...colors];
    let color1 = newColors.splice(Math.floor(Math.random() * newColors.length), 1)[0];
    let color2 = newColors[Math.floor(Math.random() * newColors.length)];
    return [color1, color2];
  }

  const handleMouseMove = () => {
    if (canChangeColor.current) {
      const [newColor1, newColor2] = selectDistinctColors();
      setColor1(newColor1);
      setColor2(newColor2);
      canChangeColor.current = false;
      timer.current = setTimeout(() => {
        canChangeColor.current = true;
      }, 1000);
    }
  }

  return (
    <Section onMouseMove={handleMouseMove}>
      <StyledH1>Do it <StyledSpan style={{color: color1}}>ORIGINAL</StyledSpan></StyledH1>
      <StyledH1>Do it <StyledSpan style={{color: color2}}>DIFFERENT</StyledSpan></StyledH1>
    </Section>
  );
}