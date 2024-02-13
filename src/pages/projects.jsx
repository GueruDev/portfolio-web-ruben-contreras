import { useNavigate } from 'react-router-dom';
import { Section } from "../components/section";

import styled from "styled-components";
import reactImg from "../img/React.png";
import angularImg from "../img/Angular.png"
import svelteImg from "../img/Svelte.png";
import vueImg from "../img/Vue.png";

const StyledImageGrid = styled.div`
    display: flex;
    width: 100%;
    height: 90%;
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
        }

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: -50%;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.1);
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
`;

  export function ImageGrid() {
    const navigate = useNavigate();
  
    return (
      <Section>
        <StyledImageGrid>
          <a onClick={() => navigate('/projects/react')} className="image-card" key={1}>
            <img src={reactImg} />
            <Star />
          </a>
          <a onClick={() => navigate('/projects/angular')} className="image-card" key={2}>
            <img src={angularImg} />
          </a>
          <a onClick={() => navigate('/projects/svelte')} className="image-card" key={3}>
            <img src={svelteImg} />
          </a>
          <a onClick={() => navigate('/projects/vue')} className="image-card" key={4}>
            <img src={vueImg} />
          </a>
        </StyledImageGrid>
      </Section>
    );
  }
  