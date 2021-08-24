import React, { useState } from 'react'
import {FcSearch} from 'react-icons/fc'
import Slider from 'react-slick'
import { Button } from '@material-ui/core'


import logo from '../../assets/logo.png'
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
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }
  return (
    <Wrapper style={{ backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), 30% rgba(0, 133, 255, 1)) 70% ` }} >
      <Container>
        {/* < Header /> */}
        <Finder>
          <Logo src={logo} alt="logo musicpreview" />
          <>
            <div>
            <input  type="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <Button>
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