import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing/Landing";
import Navbar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Proyects from "./pages/proyects/Proyects"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact  path="/" component={LandingPage} />
        <Route path="/">
          <Route path = "/" component={Navbar} />
          <Route exact path="/home"  component={About} />
          <Route exact path="/proyects" component={Proyects} />
          <Route path = "/" component={Footer} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
