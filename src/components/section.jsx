import styled from "styled-components";

const StyledSection = styled.section`
    section {
      height: 100vh;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
    }
`;

export function Section({ children, onMouseMove }) {
    return (
        <StyledSection onMouseMove={onMouseMove}>
            <section>
                {children}
            </section>
        </StyledSection>
    );
}