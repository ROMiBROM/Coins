import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = ()=>{
    const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    switch(location.pathname) {
      case "/": setActiveLink("coins") 
      break;
      case "/exchanges": setActiveLink("exchanges")
      break;
      default: setActiveLink("")
      break;
  }}, [location.pathname]);

    return(
    <header className='navbar'>
      <div style={{ marginLeft:"100px"}}>
        <Link className={activeLink==="coins" ? 'nav_link active' : 'nav_link'} to="/">Coins</Link>
        <Link className={activeLink==="exchanges" ? 'nav_link active' : 'nav_link'} to="/exchanges">Exchanges</Link>
      </div>
    </header>
    );
};

export default NavBar;