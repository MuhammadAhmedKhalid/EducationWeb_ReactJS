import React from 'react'
import AboutUsContent from '../components/AboutUsContent'
import AboutUsIntro from '../components/AboutUsIntro'
import Navbar from '../components/Navbar'

function AboutUs() {
    return (
        <div>
            <Navbar />
            <AboutUsIntro />
            <AboutUsContent />
        </div>
    )
}

export default AboutUs