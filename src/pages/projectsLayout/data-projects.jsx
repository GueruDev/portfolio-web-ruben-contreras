
import messageEncrypter from '../../img/Message-Encrypter.png';
import rickAndMortyApp from '../../img/Rick-and-Morty-app.png';
import myOwnPortfolio from '../../img/My-own-portfolio.png';
import SPAProject from '../../img/SPA-project.png';
import todoList from '../../img/512.png';

export const projects = {
    react: [
      { id: 1, name: 'Rick and Morty App', description: 'An application created with the create-react-app CLI that allows you to view all characters from the Rick and Morty series using pagination.', img:  [rickAndMortyApp], technologies: ['JavaScript', 'React', 'Bootstrap'], link: 'https://guerudev.github.io/Rick-and-Morty-app/' },
      { id: 2, name: 'My own Portfolio', description: "This is my application created with React Vite, which allows viewing my projects, CV, and a contact form. It's designed for recruiters to see my versatility as a Front-End.", img:  [myOwnPortfolio] , technologies: ['JavaScript', 'React', 'Vite', 'Styled Components', 'Contentful'], },
    ],
    typescript: [
      { id: 1, name: 'Message Encrypter', description: "Message encryption app featuring key accessibility features such as light/dark theme toggle and language switching without page reload for seamless user experience.", img: [messageEncrypter], technologies: ['TypeScript', 'SCSS', 'HTML'], link: 'https://guerudev.github.io/Message-encrypter-/' },
    ],
    javascript: [
      { id: 1, name: 'SPA Project', description: 'SPA, interactive UI, displaying a list of video games with animations made by the ViewTransition API (experimental) built with Vanilla JS.',img:  [SPAProject], technologies: ['JavaScript Vanilla', 'CSS', 'HTML'], link:'https://guerudev.github.io/SPA-project' }
    ],
    vue:[
      { id: 1, name: 'Todo List', description: 'The well-known CRUD of the Todo List. (Project in development).', img:[todoList], technologies: ['Vue', 'Emotion', 'Tailwind'] },
    ]
  };