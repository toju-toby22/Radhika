import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/navbar.css'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='nav_container'>
            <Navbar collapseOnSelect expand="lg" className=" contain_nav_bar nav_container " fixed="top">
                <Container className="justify-content-space-evenly" >
                 <Link className='link' to="/"> <Navbar.Brand className='radhika-logo'>Radhika</Navbar.Brand></Link>  
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" gap={3} id="responsive-navbar-nav">


                        <Nav className="me-auto">


                        <Navbar.Text className='nav-gap'>
                                <Link className='link' to="/aboutpage">
                                Book a Call
                                </Link>
                            </Navbar.Text>

                            <NavDropdown className='nav-gap' title="Articles" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.3">
                                    <Navbar.Text className='nav-gap'>
                                        <Link className='link' to="/financeRealEstate">
                                        Finance & Real Estate
                                        </Link>
                                    </Navbar.Text>
                                </NavDropdown.Item>



                                <NavDropdown.Item href="#action/3.3">
                                    <Navbar.Text className='nav-gap'>
                                        <Link className='link' to="/personalDevelomentPage">
                                        Personal Development
                                        </Link>
                                    </Navbar.Text>
                                </NavDropdown.Item>




                                <NavDropdown.Item href="#action/3.3">
                                    <Navbar.Text className='nav-gap'>
                                        <Link className='link' to="/careerPages">
                                        Career
                                        </Link>
                                    </Navbar.Text>
                                </NavDropdown.Item>


                                {/* <NavDropdown.Item href="#action/3.3">
                                    <Navbar.Text className='nav-gap'>
                                        <Link className='link' to="aboutpage">
                                        Newsletters
                                        </Link>
                                    </Navbar.Text>
                                </NavDropdown.Item> */}



                                <NavDropdown.Item href="#action/3.3">
                                    <Navbar.Text className='nav-gap'>
                                        <Link className='link' to="/aboutpage">
                                        Resources
                                        </Link>
                                    </Navbar.Text>
                                </NavDropdown.Item>



                                <NavDropdown.Item href="#action/3.3">
                                    <Navbar.Text className='nav-gap'>
                                        <Link className='link' to="aboutpage">
                                        Speaking Engagements
                                        </Link>
                                    </Navbar.Text>
                                </NavDropdown.Item>
                            </NavDropdown>







                            <Navbar.Text className='nav-gap'>
                                <Link className='link' to="aboutpage">
                                E-Book Out Now
                                </Link>
                            </Navbar.Text>

                            <Navbar.Text className='nav-gap'>
                                <Link className='link' to="aboutpage">
                                Contact
                                </Link>
                            </Navbar.Text>


                            <Navbar.Text className='nav-gap'>
                                <Link className='link' to="aboutpage">
                                    About
                                </Link>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;






