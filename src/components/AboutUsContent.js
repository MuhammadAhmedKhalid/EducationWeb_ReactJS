import React from 'react'
import '../styling/AboutUsContent.css'
import AboutUsImg1 from '../assets/aboutUsImg-1.jpg'
import AboutUsImg2 from '../assets/aboutUsImg-2.jpeg'
import AboutUsImg3 from '../assets/aboutUsImg-3.png'
import AboutUsImg4 from '../assets/aboutUsImg-4.png'
import AboutUsImg5 from '../assets/aboutUsImg-5.png'
import AboutUsImg6 from '../assets/aboutUsImg-6.png'
import AboutUsImg7 from '../assets/aboutUsImg-7.png'
import AboutUsImg8 from '../assets/aboutUsImg-8.png'
import AboutUsImg9 from '../assets/aboutUsImg-9.png'
import AboutUsImg10 from '../assets/aboutUsImg-10.png'
import CardImg1 from '../assets/cardImg-1.png'
import CardImg2 from '../assets/cardImg-2.png'
import CardImg3 from '../assets/cardImg-3.png'

function AboutUsContent() {
    return (
        <div>
            <div className='about'>
                <div className='left' style={{ textAlign: "left" }}>
                    <h1>Welcome to TechEduca, Enhance</h1>
                    <h1>your skills with best Online Courses</h1>
                    <br /><br />
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
                    <div className='img-container'>
                        <img src={AboutUsImg1} className='img' alt='About us img' />
                        <img src={AboutUsImg2} style={{ marginLeft: '40px' }} className='img' alt='About us img' />
                    </div>
                </div>
                <div className='vertical'>
                    <div className='center'>
                        <h1>Awesome Feature</h1>
                        <div className='card-container'>
                            <div className='card'>
                                <img src={CardImg1} className='img' alt='Card img1' />
                                <h3>- Scholarship Facility -</h3>
                            </div>
                            <div className='card'>
                                <img src={CardImg2} style={{ width: '65%' }} className='img' alt='Card img1' />
                                <h3>- Sell Online Course -</h3>
                            </div>
                            <div className='card'>
                                <img src={CardImg3} style={{ width: '65%' }} className='img' alt='Card img1' />
                                <h3>- Glocal Certification -</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <h1>Trusted By</h1>
                        <div className='elements'>
                            <div>
                                <img src={AboutUsImg5} className='img' alt='About us img5' />
                                <h5>Institute-01</h5>
                            </div>
                            <div>
                                <img src={AboutUsImg6} className='img' alt='About us img5' />
                                <h5>Institute-02</h5>
                            </div>
                            <div>
                                <img src={AboutUsImg7} className='img' alt='About us img5' />
                                <h5>Institute-03</h5>
                            </div>
                            <div>
                                <img src={AboutUsImg8} className='img' alt='About us img5' />
                                <h5>Institute-04</h5>
                            </div>
                            <div>
                                <img src={AboutUsImg9} className='img' alt='About us img5' />
                                <h5>Institute-05</h5>
                            </div>
                            <div>
                                <img src={AboutUsImg10} className='img' alt='About us img5' />
                                <h5>Institute-06</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent