import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Education from "./components/Education";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Logo from "./components/Logo";
import Main from "./components/Main";
import Skills from "./components/Skills";


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
         <Route  path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </ BrowserRouter>
  );
}

export default App;
