import React from 'react'
import { Link } from 'react-router-dom'

const NotFound=()=> {
    
    return (
        <div>
            <h1>Webpage Cannot be Found</h1><br></br>
            <div className="Notfound">
            <Link to='/'>Back to home</Link>
            </div>
        </div>
    )
}

export default NotFound;
