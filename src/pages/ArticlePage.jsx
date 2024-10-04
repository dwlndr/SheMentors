import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ArticleListFull from '../components/list/ArticleListFull'

const ArticlePage = () => {
  return (
    <div>
      <Navbar />
      <ArticleListFull />
      <Footer />
    </div>
  )
}

export default ArticlePage
