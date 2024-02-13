import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { AiFillHome, AiFillProject, AiFillInfoCircle, AiFillPhone } from 'react-icons/ai';


const StyledNavbar = styled.nav`
    position: fixed;
    width: 100%;
    z-index: 100;
    div{
        margin: 3vh auto;
        width: clamp(500px,90%,1300px);
        display: flex;
        justify-content: space-between;

    }

    button,a{
        font-size: calc(15px + (20 - 15) * ((100vw - 768px) / (1920 - 768))); // Responsive font size min 15px max 20px
        font-weight: bold;
    }

    button{
        cursor: pointer;
        padding: .6rem 1.5rem;
        border-radius: 1.1rem;
        border: transparent;
        background-color: var(--primary-btn-color);
        color: var(--primary-font-color);
        font-weight: bold;
    }
    ul {
        display: flex;
        gap: 5rem;
        list-style: none;
        li {
            position: relative;
            margin: auto;
            
            transition: transform .5s ease;
            
            &:hover {
                transform: scale(1.2);
            }
            a {
                color: var(--primary-font-color);
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: .8rem;

                svg{

                }
    
                &::before,
                &::after {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -5px;
                    background-color: #ddd;
                    transition: all 0.3s ease-in-out;
                }
    
                &::before {
                    left: 50%;
                }
    
                &::after {
                    right: 50%;
                }
    
                &:hover::before,
                &:hover::after {
                    width: 100%;
                    left: 0;
                    right: 0;
                }
            }
        }
    }

`;

export function DesktopNavbar() {
    return (
        <StyledNavbar>
            <div>
                <ul>
                    <li><NavLink to="/" activeclassname="active">Inicio<AiFillHome /></NavLink></li>
                    <li><NavLink to="/projects" activeclassname="active">Projects<AiFillProject /></NavLink></li>
                    <li><NavLink to="/about" activeclassname="active">About me<AiFillInfoCircle /></NavLink></li>
                    <li><NavLink to="/contact" activeclassname="active">Contact<AiFillPhone /></NavLink></li>
                </ul>
                <button type="button">Download CV</button>
            </div>
        </StyledNavbar>
    );
}
