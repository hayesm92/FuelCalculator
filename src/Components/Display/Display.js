import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../Navbar/NavBar'


const Display = (props) => {
    return (
        <div>
       
            <div style = {{zIndex: '-10'}}>
                {props.children}
                  
            </div>

     
        </div>
    )
}

export default Display;