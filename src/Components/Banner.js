import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import TrackVisibility from 'react-on-screen';
import kylePic from '../Assets/Img/K & A.jpg';
import Typical from 'react-typical';

export const Banner = (() => {

    const [text, setText] = useState('');

    const computerWords = [
        'Queue', 3000,
        'Websocket', 3000,
        'Latency', 3000,
        'Recursion', 3000,
        'Scalability', 3000,
        'Transaction', 3000,
        'Library', 3000,
        'API', 3000,
        'Node', 3000,
        'Synchronization', 3000,
        'Function', 3000,
        'Hashing', 3000,
        'Binary', 3000,
        'Heuristic', 3000,
        'Database', 3000,
        'Parallelism', 3000,
        'Race Condition', 3000,
        'Virtualization', 3000,
        'Abstraction', 3000,
        'Cache', 3000,
        'Concurrency', 3000,
        'Cloud', 3000,
        'Data', 3000,
        'Debugging', 3000,
        'Encryption', 3000,
        'Runtime', 3000,
        'Wrapper', 3000,
        'Topology', 3000,
        'Bandwidth', 3000,
        'Unicode', 3000,
        'Iteration', 3000,
        'Validation', 3000,
        'Pointer', 3000,
        'Object', 3000,
        'Server', 3000,
        'Interface', 3000,
        'Repository', 3000,
        'Cryptography', 3000,
        'Network', 3000,
        'URL', 3000,
        'Protocol', 3000,
        'Algorithm', 3000,
        'Compiler', 3000,
        'Dependency', 3000,
        'Framework', 3000,
        'Stack', 3000,
        'Quantum', 3000,
        'Thread', 3000,
        'Inheritance', 3000
    ];

    return (

        <section className='banner' id='home'>
            <Container>
                <Typical steps={computerWords} loop={Infinity} wrapper="span" className='typing-words' />
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 'animate_animated animate__fadeIn' : ''}>
                                    <h1>{`Hi, I'm Kyle Thompson`}<span className='wrap'>{text}</span></h1>
                                    <p> I'm an Army veteran and computer
                                        science student at Baylor University with a passion for software
                                        engineering, game development, and UI/UX design. Welcome to my portfolio, where
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