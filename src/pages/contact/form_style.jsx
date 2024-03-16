import styled from "styled-components";


export const StyledForm = styled.form`
width: clamp(300px, 90%, 600px);
padding: 2rem;
border-radius: 2rem;
font-weight: bold;

display: grid;
gap: 1.5rem;
grid-template-columns: 1fr 1fr;
background-color: var(--secondary-font-color);
color: var(--primary-btn-color);

.form-label{
    align-self: center;
}
.form-textInput,.form-textArea, .form-btnSubmit{
    padding: .8rem;
    border-radius: 1rem;
    border: none;
    transition: all .5s ease;
}
.form-btnSubmit{
    width: clamp(300px, 95%, 600px);
    margin: 0  auto;
    padding: 0%.7;

    grid-column: 1 / 3;
}
`