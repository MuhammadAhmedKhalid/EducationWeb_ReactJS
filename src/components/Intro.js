import React from 'react'
import '../styling/AboutUsIntro.css'

function Intro(props) {
    return (
        <div className='about-img'>
            <div className='heading'>
                <h1>{props.heading}</h1>
            </div>
        </div>
    )
}

export default Intro