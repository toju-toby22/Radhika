import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Components/Footer'
import React from 'react'
import aboutimage from "../Assets/second.jpeg"

const AboutSections = () => {
    return (
        <div>
            <Container className='about_container'>

                <Row className='about-row-box'>

                <h2 className='about-title'>How it began</h2>


                <Col md={6} sm className='about-image-box'>
                        <img className='aboutimage' src={aboutimage} alt="" />
                    </Col>

                    <Col md={6} sm>
                        <div className='first-section'>
                            <p>It is January 2020, 8 months after graduating college -
                                I am still lost & confused. Is this what adulthood is like?</p>

                            <p>I call my mom and dad almost everyday. How do you fry rice? What is HSA? Why is gas so expensive?</p>

                            <p>I graduated from Purdue University with a Computer Engineering degree and moved 2000+ miles away from
                                home and made my way to California for a tech job.</p>


                            <p className='sub-text'>I know I want something big for my life and my career but I am limited in my learning from what
                                school and work are teaching me. They’re not telling me what exactly a 401K is, they’re not sharing
                                how I can get my next promotion and
                                I’m not learning how to be the best version of myself. I’m realizing that I can’t rely on others for my growth.</p>

                            <p>no one is going to care more about your career than you</p>

                            <p>I decided that while I’m on my journey for something big, I want to take others with me.
                                I want to share my experience so that you are inspired to unlock your full potential. </p>



                        </div>
                    </Col>



                </Row>



                <Row className='about-row-box'>


                    <Col md={6} sm className='about-image-box'>
                        <img className='aboutimage' src={aboutimage} alt="" />
                    </Col>

                    <Col md={6} sm xs={{ order: 'first' }}>
                        <div className='second_section'>
                            <h2>And the now</h2>
                            <p>It’s 2.5 years later and I’ve navigated my career to achieve Presidents Club,
                                received 3 promotions in 3 years, started working at startups, began building wealth
                                through my real estate portfolio,
                                and formed the very first Surviving Adulthood mentorship program!</p>

                            <p>
                                I want the same for you if not more! I want you to thrive in life by going after the next promotion or
                                starting your own business or
                                expanding your skillset to do what is truly meaningful to you.
                            </p>

                            <p>My goal is to provide actionable steps about what you can do, not just vague B.S. that no one can benefit from.
                                Hope you find this website helpful in reducing some of the confusion in life.</p>


                        </div>
                    </Col>




                </Row>
            </Container>
        </div>
    )
}

export default AboutSections