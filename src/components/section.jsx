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

    @media(  width < 768px){
        transition: transform 0.3s ease;
        &.menu-active{
            backface-visibility: hidden;
            box-shadow: 10px 5px 35px -10px var(--primary-bg-color);
            transform: rotate3d(0, 1, 0, 180deg);
        }
    }
`;

export function Section({ children }) {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    );
}
