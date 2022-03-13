import logo from './logo.svg';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/Navbar';
import Home from "./components/Home.js"
import BlogContainer from './components/BlogContainer.js';
import About from './components/About';
import Resume from './components/Resume';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="test" title="Made with React" className='logo'/>
        <Navbar />
      </header>
      <div className='component-container'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs">
            <BlogContainer />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/social">
            <Social />
          </Route>
        </Switch>
        </div>
    </div>
  );
}

export default App;
