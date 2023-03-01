import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Logo
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/current-month' activeStyle>
            Current Month
          </NavLink>
          <NavLink to='/history' activeStyle>
            History
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/dashboard' activeStyle>
            Dashboard
          </NavLink>
          {/* <li> Shop 
					  <ul>
						  <li><NavLink to={`/Online`}> Online </NavLink> </li>
						  <li><NavLink to={`/Offline`}> Offline </NavLink> </li>
					  </ul>
				  </li>  */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;