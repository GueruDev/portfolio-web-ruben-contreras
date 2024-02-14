import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  AiFillHome,
  AiFillProject,
  AiFillInfoCircle,
  AiFillPhone,
} from "react-icons/ai";

const StyledLinks = styled.ul`
  display: flex;
  gap: 5rem;
  list-style: none;
  & li {
    position: relative;
    margin: auto;

    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
    & a {
      color: var(--primary-font-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.8rem;

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
  @media (width <= 768px) {
    display: none;
  }
`;

export function Links() {
  return (
    <StyledLinks>
      <li>
        <NavLink to="/" activeclassname="active">
          Inicio
          <AiFillHome />
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" activeclassname="active">
          Projects
          <AiFillProject />
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeclassname="active">
          About me
          <AiFillInfoCircle />
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeclassname="active">
          Contact
          <AiFillPhone />
        </NavLink>
      </li>
    </StyledLinks>
  );
}
