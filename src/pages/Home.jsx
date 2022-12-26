import React from 'react';
import Blog from '../components/Blog';
import Collaborators from '../components/Collaborators';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <Metrics />
     <Features />
     <Collaborators />
     <Blog />
     <FAQ />
     <Footer />
    </>
  )
}

export default Home
