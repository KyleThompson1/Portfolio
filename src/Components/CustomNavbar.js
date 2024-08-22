import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import newLogo from '../Assets/Img/icons8-source-code-400.png';
import resume from '../Assets/PDFs/Portfolio Resume.pdf';

export const CustomNavbar = () => {
    
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    // Adding functionality for scrolling to the contact area when clicking on "Lets Connect"
    const handleConnectClick = () => {
        const contactSection = document.getElementById('connect');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Portfolio Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={newLogo} alt='logo' className='circular-logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'>
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>My Skills</Nav.Link>
                        <Nav.Link href='#project' className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>My Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <button className='vvd rounded-button' onClick={handleDownload}>
                            <span>R&eacute;sum&eacute;</span>
                        </button>
                        <button className='vvd rounded-button' onClick={handleConnectClick}>
                            <span>Contact Me</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}