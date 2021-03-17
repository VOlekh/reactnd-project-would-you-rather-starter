import React from 'react'
import {useLocation} from 'react-router-dom'

function PageNotFound() {
    const { path } = useLocation()
    
    return (
        <div className="center">
            <h1>404</h1>
            <p>Page { path } doesn't exist.</p>
        </div>
    )
}

export default PageNotFound
