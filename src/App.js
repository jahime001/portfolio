
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import { Route, Routes } from "react-router-dom";
import About from './Components/About/About';
import Projects from './Projects/Projects';
import Skills from './Components/Skills/Skills';
import { Link } from 'react-scroll';
import Showcase from './Components/Showcase/Showcase';
import useLocalStorage from 'use-local-storage'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function App() {

  return (
    <div className='App'>
      <Nav/>
      <Home />
      <About />
      <Skills />
      <Showcase />
      <a href="https://www.linkedin.com/in/jahimecameau/" target='blank'><AiFillLinkedin className='floater change'/></a>
      <a href="https://github.com/jahime001" target='blank'><AiFillGithub className='floater2 change'/></a>
    </div>
  )

}

export default App;
