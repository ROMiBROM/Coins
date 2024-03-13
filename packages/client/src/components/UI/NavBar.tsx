import { Link, useLocation } from "react-router-dom";
import {  useMemo } from "react";

const NavBar = ()=>{

  const location = useLocation();

  const activeLink = useMemo(() => {
    switch(location.pathname) {
      case "/": return "coins"
      case "/exchanges": return "exchanges"
      default: return ""
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