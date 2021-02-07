import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBFormInline,
    MDBAnimation,
    MDBFooter
  } from "mdbreact";

const Footer = () =>{
    return(
        <div>
            
        <MDBFooter color="blue" className="font-small pt-4 mt-4  fixed-bottom" >
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/hayesm92"> hayesm92 </a>
            </MDBContainer>
          </div>
        </MDBFooter>
        </div>
    )
}

export default Footer;