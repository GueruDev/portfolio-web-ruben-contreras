import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    height: 100vh;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    overflow: hidden;
    transition: background-color 0.5s ease;

    & > * {
        opacity: ${props => props.opacity};
        transform: translateX(${props => props.translate}px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
`;

export function Section({ children, color }) {
    const [bgColor, setBgColor] = useState('');
    const [opacity, setOpacity] = useState(0);
    const [translate, setTranslate] = useState(-500); // Comienza en -500px

    useEffect(() => {
        setBgColor(color);
        setOpacity(1);
        setTranslate(0); // Se mueve a la posición original
    }, [color]);

    return (
        <StyledSection color={bgColor} opacity={opacity} translate={translate}>
            {children}
        </StyledSection>
    );
}
