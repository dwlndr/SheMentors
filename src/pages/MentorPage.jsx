import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MentorList from '../components/list/MentorListFull'

const MentorPage = () => {
  return (
    <div>
      <Navbar />
      <MentorList />
      <Footer />
    </div>
  )
}

export default MentorPage
