import React from 'react'
import "./Home.css"
import HeroSection from './../../components/HeroSection/HeroSection';
import Cases from './../../components/Cases/Cases';
import About from './../../components/About/About';
import Blog from './../../components/Blog/Blog';
import Footer from './../../components/Footer/Footer';




function Home() {
  return (
    <>
      <HeroSection/>
      <div className="center">
        <div className="vl"></div>
      </div>
      <Cases/>
      <About/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home