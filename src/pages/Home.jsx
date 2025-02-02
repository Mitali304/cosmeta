import React from 'react'
import Hero from '../compnents/Hero'
import Bestsellers from '../compnents/Bestsellers'
import Ourpolicy from '../compnents/Ourpolicy'
import NewsletterBox from '../compnents/NewsletterBox'
import Footer from '../compnents/footer'
import Categories from '../compnents/Categories'

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories/>
      <Bestsellers/>
      <Ourpolicy/>
      <NewsletterBox/>
    <Footer/>
    </div>
  )
}

export default Home;
