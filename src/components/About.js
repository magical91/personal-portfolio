import { Container, Row, Col } from 'react-bootstrap';
// import 'react-multi-carousel/lib/styles.css';
// import project1 from "../assets/img/meter1.svg"
// import project2 from "../assets/img/meter2.svg"
// import project3 from "../assets/img/meter3.svg"
// import colorSharp from "../assets/img/color-sharp.png"

const About = () => {
    // const responsive = {
    //     superLargeDesktop: {
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 300, min: 1024 },
    //         items: 3
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };
    
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

export default About