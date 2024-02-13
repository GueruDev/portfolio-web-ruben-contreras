import styled from 'styled-components';

const StyledSection = styled.section`
    height: 100vh;
    background-image: linear-gradient(90deg,var(--primary-bg-color)0%, var(--primary-bg-color)70%, var(--secondary-bg-color)70.05%);
    color: var(--primary-font-color); //DEFAULT
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    overflow: hidden;
`;

export function Section({ children }) {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    );
}
