import React from 'react'
import Hero from '../components/Hero'
import Bestsellers from '../components/Bestsellers'
import Ourpolicy from '../components/Ourpolicy'
import NewsletterBox from '../components/NewsletterBox'
import Footer from '../components/Footer'
import Categories from '../components/Categories'

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
