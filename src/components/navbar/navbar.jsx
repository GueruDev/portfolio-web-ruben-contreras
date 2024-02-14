import styled from "styled-components";

import { BtnNavMobile, StyledBtnNav } from './Buttons';
import { Links } from './links';


const StyledNavbar = styled.nav`
    position: fixed;
    width: 100%;
    z-index: 100;
    & > div{ /* Container */
        margin: 3vh auto;
        width: clamp(500px,90%,1300px);
        display: flex;
        justify-content: space-between;
        & > button,& a{
            font-size: calc(15px + (20 - 15) * ((100vw - 768px) / (1920 - 768))); // Responsive font size min 15px max 20px
            font-weight: bold;
        }
    }
    
    @media( width <= 768px){
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
