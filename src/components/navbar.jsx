import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
    nav{
        & ul{
            padding: 2rem 10%;
            width: 100vw;

            position: fixed;

            display: flex;
            flex-direction: row;
            justify-content: space-around;

            list-style: none;

            & a{
                text-decoration: none;
                color: white;                    
            }
        }
    }
`;

export function Navbar() {
    return (
        <StyledNavbar>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/inicio">Inicio</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </StyledNavbar>
    );
  }