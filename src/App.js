import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/Navbar';
import Home from "./components/Home.js"
import BlogContainer from './components/BlogContainer.js';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="test" className='logo'/>
        <Navbar />
      </header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blogs">
          <BlogContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
