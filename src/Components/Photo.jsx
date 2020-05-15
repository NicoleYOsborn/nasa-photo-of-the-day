import React from "react";
import styled from 'styled-components'

const ImgSection = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;

`
const MainImg = styled.img`
  width: 60%;
`
const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: black;
  color: white;
  font-size: 3em;
  border: black;

`

const Photo = props =>{

    return(
        <ImgSection>
        <Button href="#" type="previous">&laquo;</Button>
        <MainImg 
          src={props.data.url}
          alt={props.data.title}
        />
        <Button href="#" type="next">&raquo;</Button>
        </ImgSection>
    )
}
export default Photo;