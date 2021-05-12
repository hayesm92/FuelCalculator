import React from 'react';
import 'Box.css';

const Box = ({ savedArray }) => {
    return (
        <div>
            {savedArray.map(x => {
                return <div> 
                className='saved-box'
                onClick = "document.getElementsByClassName('saved-box').style.height = '200px'
                {x}</div>;
            })}
        </div>
    )
}