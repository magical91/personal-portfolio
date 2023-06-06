import React from 'react'
import Navbar from '../components/Navbar'
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Projects from "../components/Projects"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home