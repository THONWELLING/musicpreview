import React, { useState } from 'react'
import {FcSearch} from 'react-icons/fc'
import Slider from 'react-slick'
import { Button } from '@material-ui/core'


import logo from '../../assets/logo.jpg'
import music from '../../assets/music.jpg'
import {Card} from '../../components'
import {Container, Carousel, Finder, Logo, Wrapper, MusicBox, CarouselTitle} from './styles'
// import Header from '../../components/Header'


const Home = () => {
  const [inputValue, setInputValue] = useState('busca');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
  }
  return (
    <Wrapper>
      <Container>
        {/* < Header /> */}
        <Finder>
          <h1>Finder</h1>
          <Logo src={logo} alt="logo musicpreview" />
          <>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          
            <Button>
              <FcSearch />
            </Button>
          </>
          <CarouselTitle>Find More Songs</CarouselTitle>
          <Carousel {... settings}>
            <Card photo={music} />
            <Card photo={music} />
            <Card photo={music} />
            <Card photo={music} />
            <Card photo={music} />
            <Card photo={music} />
            <Card photo={music} />
            <Card photo={music} />
            <Card photo={music} />
            <Card photo={music} />
            <Card photo={music} />
          </Carousel>
        </Finder>
      </Container>
       <MusicBox />
    </Wrapper>
  );
}
 
export default Home;