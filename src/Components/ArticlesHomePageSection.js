import React, { useEffect }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GrArticle } from "react-icons/gr";
import "../Styles/ArticlesHomePageSection.css"

import AOS from "aos"
import "aos/dist/aos.css"



const ArticlesHomePageSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
}, []);

  return (
    <div>
      <div className="articles_box_container">

          <div className="text-center article_header">
          Top 4 articles to help you achieve your full potential!
          </div>
      <Container>
      {/* <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row> */}
      <Row direction="horizontal" gap={5}>
        <Col sm data-aos="fade-up">
          <div className="article">
            <div className="icon_box">
            <GrArticle className='article_icon'/>
            </div>

            <div className="article_header_description">
              <h2>Titile</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolorum. Esse assumenda incidunt nemo asperiores inventore impedit delectus ipsum culpa enim similique error accusamus, 
                voluptatum reprehenderit quasi libero magnam cupiditate.
              </p>
            </div>
          </div>
        </Col>


        <Col sm data-aos="fade-up">
          <div className="article">
            <div className="icon_box">
            <GrArticle className='article_icon'/>
            </div>

            <div className="article_header_description">
              <h2>Titile</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolorum. Esse assumenda incidunt nemo asperiores inventore impedit delectus ipsum culpa enim similique error accusamus, 
                voluptatum reprehenderit quasi libero magnam cupiditate.
              </p>
            </div>
          </div>
        </Col>




        <Col sm data-aos="fade-up">
          <div className="article">
            <div className="icon_box">
            <GrArticle className='article_icon'/>
            </div>

            <div className="article_header_description">
              <h2>Titile</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolorum. Esse assumenda incidunt nemo asperiores inventore impedit delectus ipsum culpa enim similique error accusamus, 
                voluptatum reprehenderit quasi libero magnam cupiditate.
              </p>
            </div>
          </div>
        </Col>
        
      </Row>
    </Container>
      </div>
    </div>
  )
}

export default ArticlesHomePageSection