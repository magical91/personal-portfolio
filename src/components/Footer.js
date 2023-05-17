import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/githubIcon.png";

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                <Col sm={6}>
                    <img src={logo} alt="Logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt="Icon" /></a>
                        <a href="#"><img src={navIcon2} alt="Icon" /></a>
                    </div>
                    <p>Copyright 2023. All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer