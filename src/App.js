import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import { Route, Routes, Link } from "react-router-dom";
import About from './About/About';
import Projects from './Projects/Projects';

function App() {
  return(
    <div>
       <nav>
                <Link to='/'><h3 className='a'>Home</h3></Link>
                <Link to='/about'><h3 className='a'>About Me</h3></Link>
                <h3 className='a' href="#">Skills</h3>
                <h3 className='a' href="#">Contact Info</h3>
                <h3 className='a' href="#">Resume</h3>
                <Link to='/projects'><h3 className='a'>Project Showcase</h3></Link>
        </nav>
        <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/Projects' element={<Projects/>}/>
                </Routes>
            </main>
    </div>
  )

}

export default App;
