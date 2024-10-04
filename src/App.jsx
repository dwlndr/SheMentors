import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/section/Hero";
import MentorList from "./components/list/MentorList";
import ArticleList from "./components/list/ArticleList";
import Footer from "./components/footer/Footer";
import MentorDetail from "./components/detail/MentorDetail"; // Import komponen detail mentor
import HomePage from './pages/HomePage';
import MentorPage from './pages/MentorPage';
import ArticlePage from './pages/ArticlePage';
import DetailMentor from './pages/DetailMentor';
import Payment from './components/section/Payment';
import Chat from './pages/ChatPage';

function App() {
  return (
    <Router>
      <>
        <Routes> {/* Ganti Switch dengan Routes */}
          <Route path="/" element={<HomePage/>} /> {/* Gunakan element */}
          <Route path="/mentors" element={<MentorPage />} /> {/* Gunakan element */}
          <Route path="/mentors/:id" element={<DetailMentor />} /> {/* Gunakan element */}
          <Route path="/articles" element={<ArticlePage />} /> {/* Gunakan element */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
