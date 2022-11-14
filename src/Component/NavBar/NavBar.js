import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavScrollExample() {
    return (
        <Navbar style={{backgroundColor:'red-dark'}} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className='text-white'>GRUPO 08</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">
                            <Button className="btn btn-secondary btn-sm">Inicio</Button>
                        </Nav.Link>
                        <Nav.Link href="/desarrolladores">
                            <Button className="btn btn-secondary btn-sm">Desarrolladores</Button>
                        </Nav.Link>
                        <Nav.Link href="/snake-game">
                            <Button className="btn btn-secondary btn-sm">Snake-Game</Button>
                        </Nav.Link>
                        <Nav.Link href="/cheems-game">
                            <Button className="btn btn-secondary btn-sm">Cheems-Game</Button>
                        </Nav.Link>
                        <Nav.Link href="/ahorcado">
                            <Button className="btn btn-secondary btn-sm">Ahorcado</Button>
                        </Nav.Link>
                        <Nav.Link href="/arkanoid">
                            <Button className="btn btn-secondary btn-sm">Arkanoid</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;