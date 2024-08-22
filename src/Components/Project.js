import { Col, Container, Tab, Row, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import React from 'react';
import TrackVisibility from "react-on-screen";
import studyBuddies from '../Assets/Img/SDLive.png';
import videoGame from '../Assets/Img/Video-Game.png';
import veggieApp from '../Assets/Img/Healthy Hub.png';

export const Projects = () => {

    const studyBuddyProject = [ {
        title: "Study Buddies",
        description: "Tutoring Web Application",
        imgUrl: studyBuddies,
    }];

    const gameProject = [{
        title: "[Title Unannounced]",
        description: "Fantasy 2D RPG",
        imgUrl: videoGame,
    }];

    const personalProject = [{
        title: "Healthy Hub",
        description: "Diet and Fitness App",
        imgUrl: veggieApp,
    }];

    return (

        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>My portfolio showcases a variety of software projects, both team-based and individual.</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav className="justify-content-center">
                                <Row className="w-75">
                                    <Col className="d-flex justify-content-center">
                                        <Nav.Item className='navbar-text btn mb-3 btn-custom-outline'>
                                            <Nav.Link eventKey='first'>Study Buddies (Team)</Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                    <Col className="d-flex justify-content-center">
                                        <Nav.Item className='navbar-text btn mb-3 btn-custom-outline'>
                                            <Nav.Link eventKey='second'>2D Platformer (Solo)</Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                    <Col className="d-flex justify-content-center">
                                        <Nav.Item className='navbar-text btn mb-3 btn-custom-outline'>
                                            <Nav.Link eventKey='third'>Healthy Hub (Solo)</Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                </Row>
                            </Nav>
                            <Tab.Content className='tab-content'>
                                <Tab.Pane eventKey='first' className='tab-pane'>
                                    <Row className='justify-content-center'>
                                        {
                                            studyBuddyProject.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey='second' className='tab-pane'>
                                    <Row className='justify-content-center'>
                                        {
                                            gameProject.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey='third' className='tab-pane'>
                                    <Row className='justify-content-center'>
                                        {
                                            personalProject.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}