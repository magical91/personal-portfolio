import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Banner2 from '../components/Banner2';
import Projects from '../components/Projects';

const Project = () => {
    return (
        <div>
            <Navbar />
            <Banner2 heading="PROJECTS" text="Some of my most recent work" />
            <Projects />
            <Footer />
        </div>
    )
}

export default Project