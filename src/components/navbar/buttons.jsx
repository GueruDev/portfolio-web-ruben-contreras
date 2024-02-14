import styled from "styled-components";


export const StyledBtnNav = styled.button`
    cursor: pointer;
    padding: .6rem 1.5rem;
    border-radius: 1.1rem;
    border: transparent;
    background-color: var(--primary-btn-color);
    color: var(--primary-font-color);
    font-weight: bold;
    @media( width <= 768px){
        background-color: var(--secondary-bg-color);
    }
`
const StyledHamburguerBtn = styled.button`
    display: none;
    @media( width <= 768px){
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border: none;
        cursor: pointer;
        gap: .7rem;
        
        & div{
            width: 30px;
            height: 4px;
            margin: 0;
            background-color: var(--primary-bg-color);
            border-radius: 10px;
            /* background-color: var(--primary-bg-color); */
        }
    }
`
export function  BtnNavMobile() {
    return(
        <StyledHamburguerBtn aria-label="Menu"> {/* It transforms to a 'X' when onclick()*/}
            <div></div>
            <div></div>
            <div></div>
        </StyledHamburguerBtn>
    )
}