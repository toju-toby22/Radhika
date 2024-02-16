import React from 'react'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import Banner from '../Components/Banner'
import ArticlesHomePageSection from '../Components/ArticlesHomePageSection'
import EbookSlider from '../Components/E-bookSlider'

const HomePage = () => {
  return ( <div >
     <NavigationBar/>
      
        
            <Banner/>
            <ArticlesHomePageSection/>

            <EbookSlider/>
        <Footer/>
    </div>
  )
}

export default HomePage