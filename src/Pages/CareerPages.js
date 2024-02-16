import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from "../Assets/R.jpeg"
import AOS from "aos"
import "aos/dist/aos.css"
import "../Styles/finance.css"
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom'
import fb from "../firebase";
import EbookSlider from "../Components/E-bookSlider";
const DB = fb.firestore()
const Careerblogs = DB.collection('Financeblogs');

const CareerPages = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    const [blogs, Setblogs] = useState([]);
    useEffect(() => {
        const unsubscribe = Careerblogs.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Update state
            Setblogs(data);
        });

        // Detach listener
        return unsubscribe;
    }, []);

    return (
        <div>

            <NavigationBar />


            <div className="article_banner">
                <div className='banner_container career' >
                    <Container data-aos="zoom-in" className="">
                        <Row>
                            <Col sm={6}>
                                <div className="banner_text_container">

                                    <h1 className="main_text">
                                        My Career
                                    </h1>

                                    <p className="first_text">
                                        Explore career development with me! Discover your strengths,
                                        goals, and ideal path. Get tips to excel and overcome obstacles.
                                    </p>


                                </div>


                            </Col>
                            <Col sm={5} className='image_box'>

                                <div className="image_container" data-aos="fade-down-right">
                                    <img className='books_image' src={image1} alt="" />
                                </div>


                            </Col>
                        </Row>
                    </Container>


                </div>
            </div>



            <div className="article_sections">
                {/* <div className="articles_sections_header">
                    <h2>
                        Career
                    </h2>

                    <div className="articles_details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                        aspernatur animi dolores dolorem voluptatum esse ipsum dicta facere hic
                        quod aliquid libero voluptate sapiente eveniet impedit consectetur iusto, soluta aliquam!
                    </div>
                </div> */}



                <div className="article_container">
                    <Container>
                        <Row direction="horizontal" gap={5}>
                            {blogs.map(blog => (
                                <Link className='bloglink' to={"/CareerBlogpage/" + blog.id}>
                                    <Col sm className="articles_box">
                                        <div className="article_icon">
                                            <IoPerson />
                                        </div>
                                        <div className="article_title_description">
                                            <h4 className="title">{blog.Title}</h4>
                                            <p className="description">{blog.Desc} </p>
                                        </div>
                                    </Col>
                                </Link>

                            ))}

                        </Row>
                    </Container>
                </div>
            </div>

            <EbookSlider />
            <Footer />
        </div>
    )
}

export default CareerPages