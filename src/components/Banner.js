import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/me.png"

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["MERN Full stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

  return (
      <div className='banner' id='home'>
          <Container>
              <Row className="align-items-center">
                  <Col xs={12} md={6} xl={7}>
                      <span className='tagline'>Welcome to my Portfolio</span>
                      <h1>{`Hi, I'm Marissa `}<span className='wrap'>{text}</span></h1>
                      <p>Hello, boys and girls. Today we're gonna talk about father and daughter relationship. Do you have a daddy? I bet you do. Who's your daddy?</p>
                      <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                  </Col>
                  <Col xs={12} md={6} xl={5}>
                      <img className="mern" src={headerImg} alt="Header Img" />
                  </Col>
              </Row>
          </Container>
      </div>
  )
}

export default Banner