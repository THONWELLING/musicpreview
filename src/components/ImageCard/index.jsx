import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 3px;
  width: 125px;
  height: 125px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  transform: scale(0.9);
  cursor: pointer;
  transition: .3s;
  outline: 0;
  &:hover,
  &:focus {
  opacity: .8;
  transform: scale(1);
  }
  &:disabled {
  cursor: not-allowed;
  opacity: .5;
  `;


const Title= styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 5px;
`;
const ImageCard = ({photo, title}) => {
  return (
    <Card  photo={photo}>
      <Title>{title} </Title>
    
    </Card>
  );
}
 
export default ImageCard;