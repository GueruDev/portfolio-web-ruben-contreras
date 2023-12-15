import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes , Route }  from 'react-router-dom';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Inicio } from './pages/inicio';
import { Navbar } from './components/navbar';
import { Section } from './components/section';

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

    background-color: black;
    color: white;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={
            <Section title={'Hello World!! 🚀'} msj={'This is the base page soo...'}/>
          } />
        </Routes>
      </Router>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);