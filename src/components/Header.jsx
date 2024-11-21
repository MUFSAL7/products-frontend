import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand href="#home" style={{color:"white"}}>
      
      {' '}
        ShopeEazzy.com
      </Navbar.Brand>
    </Container>
  </Navbar>
  </>
  )
}

export default Header