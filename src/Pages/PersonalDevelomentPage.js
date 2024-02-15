import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from "../Assets/person.jpeg"
import AOS from "aos"
import "aos/dist/aos.css"
import "../Styles/finance.css"
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import { FaPersonHalfDress } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import fb from "../firebase";




const DB = fb.firestore()
const PersonaldevBlogPage = DB.collection('PersonalDevelopment');


const PersonalDevelomentPage = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);



    const [blogs, Setblogs] = useState([]);
  useEffect(() => {
    const unsubscribe = PersonaldevBlogPage.limit(100).onSnapshot(querySnapshot => {
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
                <div className='banner_container person' >
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
                        Personal Development
                    </h2>

                    <div className="articles_details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                        aspernatur animi dolores dolorem voluptatum esse ipsum dicta facere hic
                        quod aliquid libero voluptate sapiente eveniet impedit consectetur iusto, soluta aliquam!
                    </div>
                </div>



                <div className="article_container">
                <Container>
                    <Row direction="horizontal" gap={5}>
                    {blogs.map(blog => (
                  <Link className='bloglink' to={"/PersonaldevBlogPage/" + blog.id}>
                        <Col sm className="articles_box">
                            <div className="article_icon">
                            <FaPersonHalfDress />
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

export default PersonalDevelomentPage