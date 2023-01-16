import React from 'react'
import '../styling/AboutUsContent.css'
import AboutUsImg from '../assets/aboutUsImg.jpg'

function AboutUsContent() {
    return (
        <div>
            <div className='about'>
                <div className='left'>
                    <h3>Welcome to TechEduca, Enhance</h3>
                    <h3>your skills with best Online Courses</h3>
                </div>
                <div className='right'>
                    <div className='img-container'>
                        <img src={AboutUsImg} className='img' alt='About us img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent