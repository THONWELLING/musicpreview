import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  `;

const ImageCard = ({photo}) => {
  return (
    <Card  photo={photo} />
  );
}
 
export default ImageCard;