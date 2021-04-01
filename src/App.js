import './App.css';
import Home from "./pages/home";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import {BrowserRouter,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/blogs' component={Blogs}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/aboutme' component={AboutMe}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
