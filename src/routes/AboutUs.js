import React from 'react'
import AboutUsContent from '../components/AboutUsContent'
import AboutUsIntro from '../components/AboutUsIntro'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutUs() {
    return (
        <div>
            <Navbar />
            <AboutUsIntro />
            <AboutUsContent />
            <Footer />
        </div>
    )
}

export default AboutUs