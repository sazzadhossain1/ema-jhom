// import React from 'react';
// import logo from '../../images/Logo.svg';
// import './Header.css'
// const Header = () => {
//     return (
//         <nav className='header'>
//             <img src={logo} alt="" />
//             <div>
//                 <a to="Shop">Shop</a>
//                 <a to="Orders">Orders</a>
//                 <a to="inventory">Inventory</a>
//                 <a to="about">About</a>
//             </div>
//         </nav>
//     );
// };

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        
        <Link to="Shop">ShOoop</Link>
        <Link to="Orders">Orders</Link>
        <Link to="inventory">Inventory</Link>
        <Link to="about">About</Link>
      </div>
    </nav>
  );
};

export default Header;
