import './App.css';
import Home from './pages/home/Home'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './pages/landing/Landing'
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Route path="/home" component={Navbar}/>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/home" exact component={Home} />
      </Switch>
     
    </div>
  );
}

export default App;
