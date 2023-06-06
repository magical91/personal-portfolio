import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Banner2 from '../components/Banner2'
import AboutContent from '../components/AboutContent'

const About = () => {
    return (
        <div>
            <Navbar />
            <Banner2 heading="About" text="I am a developer" />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About