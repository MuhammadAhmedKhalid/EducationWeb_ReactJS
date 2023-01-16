import React from 'react'
import introImg from '../assets/introImg.jpg'
import '../styling/Intro.css'

function Intro() {
    return (
        <div className='intro'>
            <div className='img'>
                <img className='introImg' src={introImg} alt='Intro img' />
            </div>
            <div className='content'>
                <h1 style={{ fontSize: '50px' }}>Enhance your future with TechEduca.</h1>
                <br />
                <p>We offer educational courses for students intead of going through colleges, universities and graduate schools.
                    We offer an unique platform to learn & grow your career in a very short period of time.</p>
                <br />
                <center><p className='btn'>VIEW COURSES</p></center>
            </div>
        </div>
    )
}

export default Intro