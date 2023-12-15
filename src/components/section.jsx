import styled from "styled-components";

const StyledSection = styled.section`
    section {
      height: 100vh;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      & h1{
        font-size:10rem;
      }
    }
`;

export function Section( {title, msj}){
    return(
        <StyledSection>
            <section>
                <h1>{title}</h1>
                <p>{`${msj} ${title}`}</p>
            </section>
        </StyledSection>
    );
}