import React from 'react'
import {useLocation} from 'react-router-dom'
import PageNotFoundJPG from "../img/404.jpg";
//https://www.redbubble.com/i/art-print/Original-Cat-Design-Funny-Cute-Astronaut-Kitty-404-Error-by-DelfDesign/46314398.1G4ZT

function PageNotFound() {
    const { path } = useLocation()
    
    return (
        <div className="center">
    
            <img
                width={250}
                className="rounded-circle"
                src= {PageNotFoundJPG}
                alt= "404"
              />

        </div>
    )
}

export default PageNotFound