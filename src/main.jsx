import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes , Route }  from 'react-router-dom';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Inicio } from './pages/inicio';
import { DesktopNavbar } from './components/navbar';
import { ImageGrid } from './pages/projects';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
        <DesktopNavbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/projects' element={<ImageGrid />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      {/* <Inicio /> */}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);