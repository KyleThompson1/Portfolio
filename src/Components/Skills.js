import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from 'react-bootstrap';
import cPlusPlusIcon from '../Assets/Img/icons8-c++-480.png';
import javaIcon from '../Assets/Img/icons8-java-480.png';
import sqlIcon from '../Assets/Img/icons8-sql-512.png';
import reactIcon from '../Assets/Img/icons8-react-native-480.png';
import springBoot from '../Assets/Img/icons8-spring-boot-480.png';
import css from '../Assets/Img/icons8-css-500.png';
import html from '../Assets/Img/icons8-html-5-480.png';
import js from '../Assets/Img/icons8-javascript-480.png';
import ts from '../Assets/Img/icons8-typescript-384.png';

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
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

        <div className='skill text-center'>
            <section className='skill' id='skills'>
                <Container>
                    <h2>Skills</h2>
                    <Row>
                        <Col>
                            <p className='text-center'>
                            As a Computer Science major, I've
                            gained a foundation in programming, 
                            data structures, software engineering, computer systems, 
                            algorithms, and database design. My experience includes developing
                            web applications, working with various databases, 
                            and collaborating in Agile environments. I am proficient in
                            version control (Git and GitHub) and have 
                            experience with build automation tools like Maven and 
                            Gradle. I love technology and 
                            continuously look to improve my skills to stay updated with 
                            the latest advancements.
                            </p>
                            <h2>Programming Languages</h2>
                            <p>I have experience with several popular programming languages, ranging from C++ to HTML.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={cPlusPlusIcon} alt='Image' />
                                    <h5>C++</h5>
                                </div>

                                <div className='item'>
                                    <img src={javaIcon} alt='Image' />
                                    <h5>Java</h5>
                                </div>

                                <div className='item'>
                                    <img src={sqlIcon} alt='Image' />
                                    <h5>SQL</h5>
                                </div>

                                <div className='item'>
                                    <img src={html} alt='Image' />
                                    <h5>HTML</h5>
                                </div>

                                <div className='item'>
                                    <img src={css} alt='Image' />
                                    <h5>CSS</h5>
                                </div>

                                <div className='item'>
                                    <img src={js} alt='Image' />
                                    <h5>JavaScript</h5>
                                </div>

                                <div className='item'>
                                    <img src={ts} alt='Image' />
                                    <h5>TypeScript</h5>
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>

                <section className='skill' id='skills'>
                    <Container>
                        <Row>
                            <Col>
                                <h2>
                                    Frameworks
                                </h2>
                                <p> I am familiar with both frontend and backend development utilizing React 
                                    and Spring Boot frameworks. This enables me to develop full-stack
                                    applications from start to finish. Additionally, I have a good 
                                    understanding of the software development lifecycle including requirements 
                                    analyis, system design, implementation, testing, and deployment.</p>
                                <Carousel responsive={responsive} infinite={true} className='skill-slider'>

                                    <div className='item'>
                                        <img src={reactIcon} alt='Image' />
                                        <h5>React</h5>
                                    </div>

                                    <div className='item'>
                                        <img src={springBoot} alt='Image' />
                                        <h5>Spring Boot</h5>
                                    </div>
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </div>
    )
}