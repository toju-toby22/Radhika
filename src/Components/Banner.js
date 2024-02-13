import React, { Component, useEffect } from "react";
import "../Styles/Banner.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from "../Assets/radh.jpeg"
import AOS from "aos"
import "aos/dist/aos.css"

const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (
        <div className="banner banner_2">
            <div className='banner_container background-image' >

                <Container data-aos="zoom-in" className="">
                    <Row>
                        <Col sm={6}>
                            <div className="banner_text_container">

                                <h1 className="main_text">
                                    Hi, I’m Radhika
                                </h1>

                                <p className="first_text">
                                    I am a Computer Engineer by degree, Strategic Sales Architect by profession, Real Estate Investor by interest,
                                    and most importantly someone who wants to help you to unlock your full potential.
                                </p>


                            </div>


                        </Col>
                        <Col sm={5} className='image_box'>

                            <div className="image_container" data-aos="fade-down-right">
                                <img className='imagess' src={image1} alt="" />
                            </div>


                        </Col>
                    </Row>
                </Container>


            </div>

            {/* <div className='quote' data-aos="fade-up">
                <h3>
                    “Radhika has truly made a positive impact, not just on my professional career,
                    but also gave me life long skill on how to be successful on any aspects of life.
                    I had an IT background of 5 years but found it very difficult to rise through the corporate ladder
                    in a tier 1 company and struggled making any notable progress in my career. Radhika selflessly
                    offered the help I needed to understand the ways of networking with the right people, importance of
                    communication, art of presenting oneself and how to stand out in an interview process. I’ve also found
                    her way of explaining things and her own success story really inspiring. Radhika is a great mentor and
                    most importantly a great human being to interact with!”
                    — Chintan
                </h3>

                <button className='banner_buton'>
                    Schedule a call now!
                </button>
            </div> */}
        </div>
    )
}

export default Banner