import React from 'react'
import "../Styles/aboutpage.css"
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import AboutSections from '../Components/AboutSections'
import EbookSlider from '../Components/E-bookSlider'

const AboutPage = () => {
  return (
    <div>

        <NavigationBar/>
        <AboutSections/>
        <EbookSlider/>
        <Footer/>




    </div>
  )
}

export default AboutPage