import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Education from "./components/Education";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Logo from "./components/Logo";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";


function App() {
  return (
    < BrowserRouter>
      <div className="App">
         <Header/>
        <Switch>
         <Route  exact={true} path="/">
            <Main />
          </Route>
        <Route  path="/logo">
            <Logo />
          </Route>
         <Route  path="/skills">
            <Skills/>
          </Route>
            <Route  path="/jobs">
            <Jobs/>
          </Route>
         <Route  path="/educations">
            <Education/>
          </Route>
         <Route  path="/projects">
             <Projects/>
          </Route>
           <Route  path="/resume">
            <Resume/>
          </Route>
            <Route  path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </ BrowserRouter>
  );
}

export default App;
