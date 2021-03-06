import React from 'react';

import { Navbar,Nav,NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../../assets/images/menuIcon.jpg';
import classes from './Toolbar.css';

export default class Toolbar extends React.Component {
  
  render() {
    return (
      <div className={classes.Toolbar}>
      
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home" className="navbar-left"><img className={classes.Logo} src={logo} alt=""/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      </div>
    );
  }
}
