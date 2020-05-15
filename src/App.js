import React, {useState, useEffect} from "react";
import "./App.css";
import Header from './Components/Header'
import Photo from './Components/Photo'
import PhotoDetails from './Components/PhotoDetails'
import axios from 'axios'
import styled from 'styled-components'

// Style the wrapper div

const WrapperDiv = styled.div `
  padding: 2%, 5%;
  background: black;
  color: white;
`

function App() {
  const [data, setData] = useState('')
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=7U3cCmigERLm5OGrvqhpOecPDeuHx7DasZYr7y5z')
    .then(result => {
      setData(result.data)
      console.log(result)
    })
  }, [])
 
  return ( 
  <WrapperDiv> 
  
  <Header data = {data}/>
  <Photo data = {data}/>
  <PhotoDetails data = {data}/>
  
  </WrapperDiv>
  );
}

export default App;