import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';

function NavBar({filterByCategorysSearch}) {
  const [searchValue, setSearchValue] = useState("")

const onSearch=()=>{
  filterByCategorysSearch(searchValue)
  setSearchValue("")
}

    return (
        <Navbar expand="lg" bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="#">
                <div style={{color:"#20c997"}}>مطعم جديد</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="بحث..."
                  className="me-2"
                  onChange={(ele)=>setSearchValue(ele.target.value)}
                  value={searchValue}
                />
                <Button onClick={()=>onSearch()} className='mx-2' variant="outline-success">بحث</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar