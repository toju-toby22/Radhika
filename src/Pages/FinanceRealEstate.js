import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from "../Assets/OIP (1).jpeg"
import AOS from "aos"
import "aos/dist/aos.css"
import "../Styles/finance.css"
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { Link } from 'react-router-dom'
import fb from "../firebase";




const DB = fb.firestore()
const Financeblogs = DB.collection('Financeblogs');


const FinanceRealEstate = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);



    const [blogs, Setblogs] = useState([]);
  useEffect(() => {
    const unsubscribe = Financeblogs.limit(100).onSnapshot(querySnapshot => {
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
                <div className='banner_container finance-background-image' >
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
                                    <img className='books_image' src={image1} alt="" />
                                </div>


                            </Col>

                            
                        </Row>
                    </Container>


                </div>
            </div>



            <div className="article_sections">
                <div className="articles_sections_header">
                    <h2>
                        Finance Real Estate
                    </h2>

                    <div className="articles_details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                        aspernatur animi dolores dolorem voluptatum esse ipsum dicta facere hic
                        quod aliquid libero voluptate sapiente eveniet impedit consectetur iusto, soluta aliquam!
                    </div>
                </div>



                <div className="article_container">
                <Container>
                    <Row direction="vertical" gap={5} className="blogs">
            {blogs.map(blog => (
                  <Link className='bloglink' to={"/BlogPage/" + blog.id}>
                        <Col className="articles_box">
                            <div className="article_icon">
                            <MdOutlineRealEstateAgent />
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

            <Footer />
        </div>
    )
}

export default FinanceRealEstate