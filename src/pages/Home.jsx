import React from 'react'
import "./style/Home.css"
import HeroSection from '../components/HeroSection'
import Cases from '../components/Cases'
import About from '../components/About'
import Blog from '../components/Blog'
import Footer from '../components/Footer'



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