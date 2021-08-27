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

  input, Button {
    display:inline-block;
    border-radius: 6px;
    margin-left: 20px;
  }
  input {
    width: 70%;
    height: 27px;
  }
  button {
    border: 2px solid #00000017;
  }
`;
export const Logo = styled.img`
width: 100%;
height: 300px;
`;
export const MusicBox = styled.div`
background-color: ${(props) => props.theme.colors.background};
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
  display: flex;
  justify-content: center;
  line-height: 29px;
  margin: 16px 0;
`;

export const  Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 3px;
  width: 100%;
  height: 125px;
  border-radius: 8px;
  background-color: url(${(props) => props.theme.colors.primary});
   h1 {
     font-size: 60px;
     color: #eeeee;
     margin-top: 10px;
   }

`;