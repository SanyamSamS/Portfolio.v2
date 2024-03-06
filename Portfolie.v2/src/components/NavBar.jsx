import { Navbar, Container, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import '../App.css';

export const NavBar = () => {
    const [active, setActive] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => { 
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    Sanyam
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link 
                            href="#home" 
                            className={active === 'home' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => setActive('home')} >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            href="#about" 
                            className={active === 'about' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => setActive('about')} >
                            About
                        </Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            className={active === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => setActive('projects')} >
                            Projects
                        </Nav.Link>
                        <Nav.Link 
                            href="#contact" 
                            className={active === 'contact' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => setActive('contact')} >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    }