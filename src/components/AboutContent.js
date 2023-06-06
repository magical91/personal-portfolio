import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
// import img1 from "../assests/51.webp";
// import img2 from "../assests/mern.png"

const AboutContent = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 300, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
    return (
        <section className='about' id='about'>
            <Container>
                <Row>
                    <Col>
                        <div className='about-bx'>
                            <h2>About</h2>
                            <p>This is just an about section and will probably include my resume</p>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className='background-image-left' src={colorSharp} /> */}
        </section>
    )
}

export default AboutContent