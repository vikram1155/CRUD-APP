import React from 'react'
import { Link } from 'react-router-dom'

const NotFound=()=> {
    
    return (
        <div>
            <h1>Find all the blogs in Home page</h1><br></br>
            <div className="Notfound">
            <Link to='/home'>Back to home</Link>
            </div>
        </div>
    )
}

export default NotFound;
