import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg"

const Banner = () => {
  return (
      <div className='banner' id='home'>
          <Container>
              <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                      <span className='tagline'>Welcome to my Portfolio</span>
                      <h1>{`Hi, I'm Marissa`}<span className='wrap'> web developer</span></h1>
                      <p>Hello, boys and girls. Today we're gonna talk about father and daughter relationship. Do you have a daddy? I bet you do. Who's your daddy?</p>
                      <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                      <img src={headerImg} alt="Header Img" />
                  </Col>
              </Row>
          </Container>
      </div>
  )
}

export default Banner