import React from 'react';
import styled from 'styled-components'

const Details = styled.div`
background: rgba(0, 0, 0, 0.4);
position: absolute;
left: 25%;  
right: 25%;  
top: 45%;  
bottom: 10%;  
margin: auto; 
padding: 0px 20px; 
border-radius: 20px; 
opacity: 0;
&:hover {
    opacity: 1;
  }

`

const PhotoDetails = props =>{
    console.log(props)
return(
    <Details>
    <p>{props.data.explanation}</p>
   
    </Details>
)
}

export default PhotoDetails;