
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Showcase from './Components/Showcase/Showcase';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <div className='App'>
      <Nav/>
      <Home />
      <About />
      <Skills />
      <Showcase />
      <Contact />
      <a href="https://www.linkedin.com/in/jahimecameau/" target='blank'><AiFillLinkedin className='floater change'/></a>
      <a href="https://github.com/jahime001" target='blank'><AiFillGithub className='floater2 change'/></a>
    </div>
  )

}

export default App;
