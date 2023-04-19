import React from 'react'
import ContentColumn from '../../../components/CardsGrid/ContentColumn/ContentColumn'
import MovieCardsGrid from '../../../components/CardsGrid/MovieCardsGrid'
import { MovieCarousel } from '../../../components/Carousel/MovieCarousel'
import Footer from '../../../components/Footer/Footer'
import MovieCard from '../../../components/MovieCard/MovieCard'
import ResponsiveAppBar from '../../../components/Navbar/Navbar'
import '../../../components/ProfileCard/Profile.css'

const HomePage = () => {
  return (
    <div className='bg'>
      <ResponsiveAppBar />
      <MovieCarousel />
      <ContentColumn />
      <Footer/>
    </div>
  )
}

export default HomePage