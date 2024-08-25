import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import TrackVisibility from 'react-on-screen';
import kylePic from '../Assets/Img/K & A-2.jpg';
import Typical from 'react-typical';

export const Banner = (() => {

    const [text, setText] = useState('');

    return (

        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 'animate_animated animate__fadeIn' : ''}>
                                    <h1>{`Hi, I'm Kyle Thompson`}<span className='wrap'>{text}</span></h1>
                                    <p> I'm a U.S. Army veteran and computer
                                        science student at Baylor University with a passion for software
                                        engineering, game development, and UI/UX design. That's me on the right, 
                                        alongside my wife, Ashley. Welcome to my portfolio, where
                                        you'll see the projects and skills that showcase my path in the tech
                                        world. Let's build something amazing together!</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} className='text-right'>
                        <img src={kylePic} alt='Header Img' className='circular-image' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
)