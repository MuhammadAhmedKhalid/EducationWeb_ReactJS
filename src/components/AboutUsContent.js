import React from 'react'
import '../styling/AboutUsContent.css'
import AboutUsImg1 from '../assets/aboutUsImg-1.jpg'
import AboutUsImg2 from '../assets/aboutUsImg-2.jpeg'
import AboutUsImg3 from '../assets/aboutUsImg-3.png'
import AboutUsImg4 from '../assets/aboutUsImg-4.png'

function AboutUsContent() {
    return (
        <div>
            <div className='about'>
                <div className='left' style={{ textAlign: "left" }}>
                    <h1>Welcome to TechEduca, Enhance</h1>
                    <h1>your skills with best Online Courses</h1>
                    <br />
                    <h4>You can start and finish one of these popular courses in under a day.</h4>
                    <h4>Take the course for free.</h4>
                    <br />

                    <div className='x-axis'>
                        <div ><img src={AboutUsImg3} className='course-img' alt='About us img1' /></div>
                        <div  >
                            <h2>400+ Courses</h2>
                            <h4>You can start and finish one of these popular courses in under our site.</h4>
                        </div>
                    </div>
                    <div className='x-axis'>
                        <div ><img src={AboutUsImg4} className='lifetime-img' alt='About us img2' /></div>
                        <div  >
                            <h2>Lifetime Access</h2>
                            <h4>We will be providing you courses for lifetime access. Take the course for free.</h4>
                        </div>
                    </div>

                </div>
                <div className='right'>
                    <div className=' img-container'>
                        <img src={AboutUsImg1} className='img' alt='About us img' />

                        <img src={AboutUsImg2} style={{ marginLeft: '40px' }} className='img' alt='About us img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent