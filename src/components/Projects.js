import projectImg1 from "../assets/img/Photo-coming-soon.jpg";
import projectImg2 from "../assets/img/Placeholder.jpg";
import projectImg3 from "../assets/img/inderdeep-kanda.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard from "./ProjectCard";
import { Container, Nav, Row, Col, Tab } from "react-bootstrap"


const Projects = () => {

    const projects = [
        {
            title: "Example 1",
            description: "Web Development",
            imgUrl: projectImg1,
        },
        {
            title: "Example 2",
            description: "Web Development",
            imgUrl: projectImg2,
        },
        {
            title: "Example 3",
            description: "Web Development",
            imgUrl: projectImg3,
        }
    ]

  return (
      <section className="project" id="project">
          <Container>
              <Row>
                  <Col>
                      <h2>Projects</h2>
                      <p>This will be a my projects description in the near future</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                          </Nav>
                          <Tab.Content>
                              <Tab.Pane event="first">
                                  <Row>
                                      {
                                          projects.map((project, index) => {
                                              return (
                                                  <ProjectCard key={index} {...project} />
                                          )
                                         }) 
                                      }
                                  </Row>
                              </Tab.Pane>
                              <Tab.Pane event="second">I'm gay</Tab.Pane>
                              <Tab.Pane event="third">Bitch me too</Tab.Pane>
                          </Tab.Content>
                      </Tab.Container>
                  </Col>
              </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2} alt="gradient background for my portfolio"></img>
    </section>
  )
}

export default Projects