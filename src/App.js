import React from 'react'
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
  return (
    <Router>
      <div className="container">
        <nav className="nav-main">
            <img src={logoBlanco} alt="Logo Empresarial" className="brand"/>
            <ul>
                <li>
                  <Link to="/">Inicio</Link>
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
