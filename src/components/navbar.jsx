import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #333;
    height: 60px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;

    ul {
        display: flex;
        list-style: none;
    }

    li {
        margin: 0 15px;
        position: relative;

        a {
            color: #fff;
            text-decoration: none;
            font-size: 1.2rem;
            transition: color 0.3s ease-in-out;

            &:hover {
                color: #ddd;
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
                width: 50%;
                left: 0;
                right: 0;
            }
        }
    }
`;

export function DesktopNavbar() {
    return (
        <StyledNavbar>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About me</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </StyledNavbar>
    );
}
