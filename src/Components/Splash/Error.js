import React from 'react'
import './Error.css'

const Error = ({err,refresh}) => {
    return (
        <div className = 'errorbg'>
            <h1 id = 'error'>Error</h1>
                <p id = 'errortwo'>{err}</p>


                <button id = 'refresh' type="submit" class="btn btn-outline-danger" onClick={refresh} >Refresh</button>
            </div>
    )
}

export default Error;