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
          <Route path="/" element={<Inicio />} />
          <Route path="/projects" element={<ImageGrid />} />
          <Route
            path="/projects/react"
            element={
              <Layout
                title="React"
                img='/logos/React.png'
                text="Frontend library for building user interfaces with reusable components, focused on efficiency, state management, and agile development of web applications."
              />
            }
          />
          <Route
            path="/projects/typescript"
            element={
              <Layout
                title="TypeScript"
                img='/logos/TypeScript.png'
                text="Superset of JavaScript adding optional static typing, providing a more robust way to build and maintain large JavaScript applications."
              />
            }
          />
          <Route
            path="/projects/javascript"
            element={
              <Layout
                title="JavaScript"
                img='/logos/JavaScript.png'
                text="Programming language used in web development to create interactivity and dynamism in pages, supported by all browsers."
              />
            }
          />
          <Route
            path="/projects/vue"
            element={
              <Layout
                title="Vue"
                img='/logos/Vue.png'
                text="
                Progressive JavaScript framework for creating interactive and sophisticated user interfaces, known for its gentle learning curve and flexibility in frontend development."
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
