import { Container, Carousel, Row, Col } from 'react-bootstrap';
// import 'react-multi-carousel/lib/styles.css';
import project1 from "../assets/img/meter1.svg"
import project2 from "../assets/img/meter2.svg"
import project3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
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
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skills-bx'>
                            <h2>Projects</h2>
                            <p>This is just a project description</p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className='item'>
                                    <img src={project1} alt='Image' />
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={project2} alt='Image' />
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={project3} alt='Image' />
                                    <h5>Web Development</h5>
                                </div>
                                {/* <div className='item'>
                                    <img src={project4} alt='Image' />
                                    <h5>Web Development</h5>
                                </div> */}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
    )
}

export default Skills