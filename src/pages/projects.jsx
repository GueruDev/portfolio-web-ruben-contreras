import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Section } from "../components/section";

import styled from "styled-components";
import reactImg from "../img/React.png";
import angularImg from "../img/Angular.png";
import javascriptImg from "../img/JavaScript.png";
import vueImg from "../img/Vue.png";
import typescriptImg from "../img/TypeScript.png";

const StyledParagraph = styled.h3`
  color: var(--secondary-font-color);
  font-size: clamp(1.5rem, 5vw, 3.5rem);
  @media( width <= 768px){
    margin-top: 6vh;
  }
`;

const StyledImageGrid = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  overflow: hidden;
  

  .image-card {
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;
    flex: 1;
    cursor: pointer;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: all 0.5s ease;
      pointer-events: none;
      
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -50%;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      transform: skewX(-20deg);
      transition: all 0.5s ease;
      z-index: 1;
    }

    &:hover {
      transform: scale(1.02);

      img {
        transform: scale(1.25);
      }

      &:before {
        left: 120%;
      }
    }
  }
  @media (width < 768px) {
    flex-direction: column;
    height: 80%;
  }
`;

const Star = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: #ff0;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  @media (width < 768px) {
    --start-size: clamp(40px, 12vw, 100px);
    top: 50%;
    transform: translateY(-50%);
    height: var(--start-size);
    width: var(--start-size);
    margin-left: 10vw;
  }
`;

export function ImageGrid() {
  return (
    <Section>
      <StyledParagraph>Choose the project category</StyledParagraph>
      <StyledImageGrid>
        <NavLink to={"/projects/react"} className="image-card" key={1}>
          <img src={reactImg} />
          <Star />
        </NavLink>
        <NavLink to={"/projects/typescript"} className="image-card" key={2}>
          <img src={typescriptImg} />
        </NavLink>
        <NavLink to={"/projects/javascript"} className="image-card" key={3}>
          <img src={javascriptImg} />
        </NavLink>
        <NavLink to={"/projects/vue"} className="image-card" key={4}>
          <img src={vueImg} />
        </NavLink>
      </StyledImageGrid>
    </Section>
  );
}
