import styled, { keyframes } from 'styled-components';
import { projects } from './data-projects';
const zoomIn = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const LayoutContainer = styled.div.attrs({ className: 'layout-container' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
  max-width: 1300px;
  margin: 0 auto;
  animation: ${zoomIn} 0.5s;

  .image {
    width: 100%;
    max-width: 20%;
    height: auto;
  }

  .description {
    text-align: center;
    width: 100%;
  }

  .project-grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;
    gap: 2rem;

    .project-card {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 8px;
      perspective: 30500px;
      position: relative;
      cursor: pointer;

      &:hover .card-inner {
        transform: rotateY(180deg);
      }

      &:hover .card-front img {
        transform: scale(1.2);
      }

      .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform .4s;
        transform-style: preserve-3d;

        .card-front {
          position:relative;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;

          img {
            width: 100%;
            max-width: 512px;
            height: auto;
            transition: transform 0.3s ease-in-out;
          }
        }

        .card-back {
          position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #000;
  color: white;
  border-radius: 8px;
  transform: rotateY(180deg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .technologies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
    list-style: none;
    padding: 0;
  }
        }
      }
    }
  }
`;

const Image = styled.img.attrs({ className: 'image' })``;

const Description = styled.p.attrs({ className: 'description' })``;

const ProjectGrid = styled.div.attrs({ className: 'project-grid' })``;

const ProjectCard = styled.div.attrs({ className: 'project-card' })``;

const CardInner = styled.div.attrs({ className: 'card-inner' })``;

const CardFront = styled.div.attrs({ className: 'card-front' })``;

const CardBack = styled.div.attrs({ className: 'card-back' })``;

export const Layout = ({ title, img, text }) => {
  // Asegúrate de reemplazar esto con los datos de tus proyectos
  const projectList = projects[title.toLowerCase()];

  return (
    <LayoutContainer>
      <h1>{title}</h1>
      <Image src={img} alt={title} />
      <Description>{text}</Description>
      <ProjectGrid>
        {projectList.map(project => (
          <ProjectCard key={project.id}>
            <CardInner>
              <CardFront>
                <img src={project.img} alt={project.name} />
                <h2>{project.name}</h2>
              </CardFront>
              <CardBack>
                <p>{project.description}</p>
                <ul className="technologies">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </CardBack>
            </CardInner>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </LayoutContainer>
  );
};