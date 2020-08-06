import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {  Link } from "react-router-dom";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

import logo from '../../Images/trimeLogo.png';
import profile from '../../Images/user.png';
import 'font-awesome/css/font-awesome.min.css';



export default class Navibar extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                  
                };   
            }

  render() {
    return (
      <Navbar
      collapseOnSelect
      expand='lg'
      // bg='dark'
      // variant='dark'
      style={{ marginBottom: '0px', background: 'white' }}
  >
    <div className="container-fluid shadow p-3 mb-5 bg-white rounded">
      <Link to="/" class="navbar-brand">
       
          <img src ={logo} style = {{height: '40px', width: '150px',paddingLeft: '50px'}} />
       
        <span class="sr-only">Home</span>
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav style = {{float: 'right', marginLeft: '85%'}} className='mr-auto'>
   

        {/* logout */}     
            
             <Nav.Link  style={{ marginTop:'2px' }}>
                   <Link className = "users" to='/users' style={{ color: 'gray', opacity: '40%'}}>
                      Logout <i className = "fa fa-sign-out"></i>
                  </Link>
             </Nav.Link>
             <Nav.Link  style={{ marginTop:'2px' }}>
                   <Link className = "profile" to='/profile'>
                     <img src = {profile} style = {{height: '30px', width: '30px', borderRadius: '50%', color: 'gray', opacity: '40%'}} />
                  </Link>
             </Nav.Link>              
         
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    );
  }
}
