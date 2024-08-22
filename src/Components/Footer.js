import { Container, Row, Col } from 'react-bootstrap';
import linkedIn from '../Assets/Img/nav-icon1.svg'
import github from '../Assets/Img/Github Icon.png'

export const Footer = () => {

    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <Col sm={12} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href='https://github.com/KyleThompson1'><img src={github} /></a>
                            <a href='https://www.linkedin.com/in/kyle-thompson1/'><img src={linkedIn} /></a>
                        </div>
                        <p> Disclaimer: The content and opinions expressed on this website are my own 
                            and do not reflect the views of any organization or employer I may be 
                            affiliated with. All projects are for educational purposes. 
                            While I strive for accuracy, errors may be present. Links to external websites 
                            are provided for convenience and do not imply endorsement. © Kyle Thompson, 2024. 
                            All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}