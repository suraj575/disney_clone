import './App.css';
import Header from './Components/header'
import Home from './Components/home';
import Details from './Components/Details';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
           <Header/>
           <Switch>
              <Route path="/detail/:id">
                 <Details/>
              </Route>
              <Route path="/login">
                 <Login/>
              </Route>
              <Route path="/">
                 <Home/>
              </Route>
           </Switch>
       </Router>
       
   
    </div>
  );
}

export default App;
