import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Banner2 from '../components/Banner2'
import Form from '../components/Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Banner2 heading="Contact" text="Lets chat" />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact