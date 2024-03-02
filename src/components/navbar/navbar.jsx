import styled from "styled-components";

import { BtnNavMobile, StyledBtnNav } from './buttons';
import { Links } from './links';


const StyledNavbar = styled.nav`
    position: fixed;
    width: 100%;
    z-index: 100;
    & > div{ /* Container */
        margin: 3vh auto;
        width: clamp(300px,90%,1300px);
        display: flex;
        justify-content: space-between;
        & > button,a{
            font-size: clamp(1.8rem,2vw,2.5rem);
            font-weight: bold;
        }
    }
    
    @media( width < 768px){
        & > div{
            flex-direction: row-reverse;
        }
    }
    `;

export function Navbar() {
    return (
        <StyledNavbar>
            <div>
                <Links />
                <BtnNavMobile />
                <StyledBtnNav type="StyledBtnNav">Download CV</StyledBtnNav>
            </div>
        </StyledNavbar>
    );
}
