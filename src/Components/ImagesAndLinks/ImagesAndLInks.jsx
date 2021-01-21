import React from 'react'
import "./ImagesAndLinks.css"
import {Twitter, Instagram, GitHub, LinkedIn}  from '@material-ui/icons'



export default function ImagesAndLInks() {
    return (
        <div>
            <div>
                <div className="my_image"></div>
                <div className="display_flex">
                   <div><Twitter/></div>
                   <div><Instagram/></div>
                   <div><GitHub/> </div>
                   <div><LinkedIn/></div>
                </div>

            </div>
        </div>
    )
}
