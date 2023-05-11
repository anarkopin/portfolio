import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/jalponce.png";
import projImg2 from "../assets/img/maxxis.png";
import projImg3 from "../assets/img/ingytal.png";
import projImg4 from "../assets/img/negociosjicamarca.png";
import projImg5 from "../assets/img/imaji.png";
import projImg6 from "../assets/img/fabricorp.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const Projects = () => {

  const projects = [
    {
      title: "Consultora contable Jalponce",
      description: "Desarrollo de una web de marca personal",
      imgUrl: projImg1,
      url: "https://consultoracontablejalponce.com/"
    },
    {
      title: "MaxxisAutomotriz",
      description: "Diseño  y desarrollo a medida",
      imgUrl: projImg2,
      url: "https://maxxisautomotriz.com/"
    },
    {
      title: "Ingytal",
      description: "Desarrollo de una web de marca personal",
      imgUrl: projImg3,
      url: "https://ingytal.com/"
    },
    {
      title: "Negocios Jicamarca",
      description: "Desarrollo de catalogo de negocios a medida",
      imgUrl: projImg4,
      url: "#"
    },
    {
      title: "Inversiones IMAJI",
      description: "Desarrollo a medida de homepage",
      imgUrl: projImg5,
      url: "https://www.inversionesimaji.pe/"
    },

    {
      title: "Fabricorp",
      description: "Desarrollo a medida de homepage",
      imgUrl: projImg6,
      url: "https://www.fabricorp.pe/"
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Clientes de distintos rubros, mismos objetivos: generar un impacto digital y mejorar y/o automatizar sus procesos de negocio</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Router>
                                 <ProjectCard
                                key={index}
                                {...project}
                                />

                              </Router>
                             
           
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Proximamente</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Proximamente</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}