import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/section/Hero'
import MentorList from '../components/list/MentorList'
import ArticleList from '../components/list/ArticleList'
import Footer from '../components/footer/Footer'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MentorList />
      <ArticleList />
      <Footer />
    </div>
  )
}

export default HomePage
