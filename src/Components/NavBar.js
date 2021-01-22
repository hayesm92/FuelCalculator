import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FormControl } from 'react-bootstrap'
import './NavBar.css'

const NavBar = ({onRouteChange}) => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light" >
                <div class="container-fluid" style = {{width: '100%'}}>
                    <a class="navbar-brand" href="#">Fuel Calculator</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#" onClick = {()=> onRouteChange('home')}>Home</a>
                            <a class="nav-link" href="#"onClick = {()=> onRouteChange('calculator')}>Calculator</a>
                            <a class="nav-link" href="#"onClick = {()=> onRouteChange('setup')}>Setup </a>
                            {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;