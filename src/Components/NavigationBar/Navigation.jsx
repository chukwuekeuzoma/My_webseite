import React from 'react'
import "./Navigation.css"

function Navigation() {
    return (
        <nav className="nav_class">
             <b className="martins">Martins</b>
             <div className="padding_left_100 display_flex ">
                <div className="hover contact_resume">Contact</div>
                <div className="hover contact_resume" >Resume</div>
             </div>
                
        </nav>
    )
}

export default Navigation
