import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Carousel from './Components/Carousel';
import Cards from './Components/Cards';
import Cards1 from './Components/Cards1';
import Form from './Components/Form';
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{overflow:"hidden"}}>
      <Navbar style={{background:"linear-gradient(to left, #fbd3e9, #bb377d)"}}  light expand="md">
        <NavbarBrand style={{color:"#0000ff"}} href="/">Laptops</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar >
            <NavItem>
              <NavLink  style={{color:"#0000ff"}} href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:"#0000ff"}} href="/Service/">Service</NavLink>
            </NavItem>
            <UncontrolledDropdown  nav inNavbar>
              <DropdownToggle style={{color:"#0000ff"}} nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  gaming
                </DropdownItem>
                <DropdownItem >
                  Simple
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{color:"#0000ff"}}>Login</NavbarText>

          <NavbarText style={{color:"#0000ff",padding:5}}>SignUp</NavbarText>
        </Collapse>
      </Navbar>
      <Carousel />
      <Cards />
      <br/>
      <Cards1 />
      
      <Form />
    
    </div>
  );
}

export default Example;