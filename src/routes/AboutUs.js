import React from 'react'
import AboutUsContent from '../components/AboutUsContent'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutUs() {
    return (
        <div>
            <Navbar />
            <Intro heading="ABOUT US" />
            <AboutUsContent />
            <Footer />
        </div>
    )
}

export default AboutUs