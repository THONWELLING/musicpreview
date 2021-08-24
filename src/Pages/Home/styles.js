import styled from 'styled-components'
import Slider from 'react-slick'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 40vw;
  height: 100vh;
  overflow-y: auto;
`;
export const Finder = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};

  input, Button{
    display:inline-block;
  }
`;
export const Logo = styled.img`
width: 100%;
height: 300px;
`;
export const MusicBox = styled.div`
background-color: ${(props) => props.theme.colors.primary};
width: 60vw;
`;

export const Carousel = styled(Slider)`
  .slick-slider {
    margin-right: 16px;
  }
`;


export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;