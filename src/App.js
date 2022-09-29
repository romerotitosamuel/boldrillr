import React, {useState}from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import './styles/styles.scss'


import logoBlanco from './img/logoBoldrillBlanco.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  /*const linkShow = {transform: 'translate(0px)'};
  const linkHide = {transform: 'translate(-300px, 0px)'}*/
  const linkShow = { display: ''};
  const linkHide = { display: 'none'}
  let ini // Initial resolution from device
  const resInit = () => {
    if (window.screen.width>700){return ini = true}else{return ini = false}
  }
  resInit() 

  const [showindex, setShowindex] = useState(ini)
  
  const showMenu = () => {
    setShowindex(!showindex)   
  } 
  

  return ( <div>
    <div className="menu-btn" onClick={showMenu} >
      <i className="fa fa-bars fa-2x"></i>
    </div>

    <Router>
      <div className="container">
        
        <nav className="nav-main"   >
            <img src={logoBlanco} alt="Logo Empresarial" className="brand"/>
            
            <ul className="nav-menu" style={showindex? linkShow : linkHide} >
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
  </div>
  );
}

export default App;
