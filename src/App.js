import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Banner from './Banner';
import HomePage from './HomePage';
import CardPage from './CardPage';
import CommunityPage from './CommunityPage';
import Press from './Press';
import Testimonial from './Testimonial';
import Footer from './Footer';
import chat from './images/chat.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      <HomePage />
      <CardPage />
      <CommunityPage />
      <Press />
      <Testimonial />
      <Footer />
      <img className='chat' src={chat} alt='chat' />
    </div>
  );
}

export default App;
