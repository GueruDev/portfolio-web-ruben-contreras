//! LIBRARIES
import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//! COMPONENTS
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Inicio } from "./pages/inicio";
import { Navbar } from "./components/navbar/navbar";
import { ImageGrid } from "./pages/projects";
import { Layout } from "./pages/projectsLayout/layout";

//! IMG
import reactImg from "./img/logos/React.png";
import angularImg from "./img/logos/Angular.png";
import svelteImg from "./img/logos/Svelte.png";
import vueImg from "./img/logos/Vue.png";

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
    font-size: 1.6rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/projects" element={<ImageGrid />} />
          <Route
            path="/projects/react"
            element={
              <Layout
                title="React"
                img={reactImg}
                text="React es una biblioteca JavaScript para construir interfaces de usuario."
              />
            }
          />
          <Route
            path="/projects/angular"
            element={
              <Layout
                title="Angular"
                img={angularImg}
                text="Angular es un marco de trabajo para construir aplicaciones web."
              />
            }
          />
          <Route
            path="/projects/svelte"
            element={
              <Layout
                title="Svelte"
                img={svelteImg}
                text="Svelte es un marco de trabajo para construir interfaces de usuario."
              />
            }
          />
          <Route
            path="/projects/vue"
            element={
              <Layout
                title="Vue"
                img={vueImg}
                text="Vue.js es un marco de trabajo para construir interfaces de usuario."
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
