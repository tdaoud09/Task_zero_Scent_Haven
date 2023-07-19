import './App.css';
import Navbar from "./components/Navbar"
import Main from "./pages/Main"
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>

          <Route path="/" exact component={Main} />
          <Route path="/main" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
