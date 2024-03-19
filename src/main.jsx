//! LIBRARIES
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CONTENFUL
import { useContentful } from "./hooks/useContenful.jsx";

//! COMPONENTS
import { About } from "./pages/about";
import { Contact } from "./pages/contact/contact.jsx";
import { Inicio } from "./pages/inicio";
import { Navbar } from "./components/navbar/navbar";
import { ImageGrid } from "./pages/projects";
import { Layout } from "./pages/projectsLayout/layout";
import { Section } from "./components/section.jsx";

// IMAGES
import angular from "./img/logos/Angular.png";
import javascript from "./img/logos/JavaScript.png";
import react from "./img/logos/React.png";
import typescript from "./img/logos/TypeScript.png";
import vue from "./img/logos/Vue.png";

//! TRANSLATIONS
import { spanish } from "./lang/spanish.json";
import { english } from "./lang/english.json";

const GlobalStyle = createGlobalStyle`
:root{
  --primary-bg-color:#010D23;
  --secondary-bg-color:#038BBB;
  --primary-font-color:#FFFFFF;
  --secondary-font-color:#E19F41;
  --thirdary-font-color:#FCCB6F;
  --primary-btn-color:#000;
  --secondary-btn-color:#FCCB6F;
}
@font-face {
  font-family: 'FiraCode';
  src: url('../src/fonts/FiraCode-Regular.ttf') format('truetype');
  font-weight: normal;
}
@font-face {
  font-family: 'FiraCode';
  src: url('../src/fonts/FiraCode-Bold.ttf') format('truetype');
  font-weight: bold;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'FiraCode',sans-serif;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: #000;
    font-size: 1.6rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
`;

function App() {
  // const [users, setUsers] = useState([]);
  // const { getUsers} = useContentful();

  // useEffect(() => {
  //   getUsers().then((response) => {
  //     console.log("Vamos funciona MRD !!!:", response); // Agregamos un console.log para ver los datos
  //     if (response) {
  //       setUsers(response);
  //     }
  //   });
  // } , []);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/portfolio-web-ruben-contreras/" element={<Inicio />} />
          <Route path="/portfolio-web-ruben-contreras/projects" element={<ImageGrid />} />
          <Route
            path="/portfolio-web-ruben-contreras/projects/react"
            element={
              <Section>
                <Layout
                  title="React"
                  img={react}
                  text="Frontend library for building user interfaces with reusable components, focused on efficiency, state management, and agile development of web applications."
                />
              </Section>
            }
          />
          <Route
            path="/portfolio-web-ruben-contreras/projects/typescript"
            element={
              <Section>
                <Layout
                  title="TypeScript"
                  img={typescript}
                  text="Superset of JavaScript adding optional static typing, providing a more robust way to build and maintain large JavaScript applications."
                />
              </Section>
            }
          />
          <Route
            path="/portfolio-web-ruben-contreras/projects/javascript"
            element={
              <Section>
                <Layout
                  title="JavaScript"
                  img={javascript}
                  text="Programming language used in web development to create interactivity and dynamism in pages, supported by all browsers."
                />                
              </Section>
            }
          />
          <Route
            path="/portfolio-web-ruben-contreras/projects/vue"
            element={
              <Section>
                <Layout
                  title="Vue"
                  img={vue}
                  text="
                  Progressive JavaScript framework for creating interactive and sophisticated user interfaces, known for its gentle learning curve and flexibility in frontend development."
                />                
              </Section>
            }
          />
          <Route path="/portfolio-web-ruben-contreras/about" element={<About />} />
          <Route path="/portfolio-web-ruben-contreras/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
