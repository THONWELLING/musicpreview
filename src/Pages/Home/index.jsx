import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {FcSearch} from 'react-icons/fc'
import Slider from 'react-slick'
import { Button } from '@material-ui/core'


import logo from '../../assets/logo.png'
import music from '../../assets/music.jpg'
import {Card} from '../../components'
import {Container, Header, Carousel, Finder, Logo, Wrapper, MusicBox, CarouselTitle} from './styles'

const API_BASE = 'https://api.spotify.com'


const Home = () => {
  const [inputValue, setInputValue] = useState('busca');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }

  useEffect(() => {
    axios.get(`${API_BASE}/v1/tracks`)
    .then(() => {
      console.log('Deu tudo Certo')
    })

    .catch(() => {
      console.log('Deu errado')
    })

    }, [])
  
  return (
    <Wrapper style={{ backgroundImage: `linear-gradient(to right, rgba(0, 207, 255, 0.8),  rgba(0, 133, 255, 0.9))` }} >
      <Container>
        < Header>
          <h1>Music Finder</h1>
        </Header>
        <Finder>
          <Logo src={logo} alt="logo musicpreview" />
          <>
            <div>
            <input  type="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <Button>
                Find
                <FcSearch />
              </Button>
            </div>
          </>
          <CarouselTitle>Find More Songs</CarouselTitle>
          <Carousel {... settings}>
            <Card photo={music} title="algum nome " />
            <Card photo={music} title="algum nome " />
            <Card photo={music} title="algum nome " />
            <Card photo={music} title="algum nome " />
            <Card photo={music} title="algum nome " />
            <Card photo={music} title="algum nome " />
            <Card photo={music} title="algum nome " />
            <Card photo={music} title="algum nome " />
            <Card photo={music} title="algum nome " />
            <Card photo={music} title="algum nome " />
            <Card photo={music} title="algum nome " />
          </Carousel>
        </Finder>
      </Container>
       <MusicBox>
       </MusicBox>
    </Wrapper>
  );
}
 
export default Home;