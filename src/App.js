import React, {useState}from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import './styles/styles.css'


import logoBlanco from './img/logoBoldrillBlanco.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






function App() {

  const [color, setColor] = useState({color: "red"})

  

  return (
    <Router>
      <div className="container">
        
        <nav className="nav-main" >
          <div className="menu-btn"  >
            <i className="fa fa-bars fa-2x"></i>
          </div>
            <img src={logoBlanco} alt="Logo Empresarial" className="brand"/>
            <ul className="nav-menu">
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
                
            </ul>
        </nav>
      
      </div>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
