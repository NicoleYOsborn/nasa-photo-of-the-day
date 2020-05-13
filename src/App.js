import React, {useState, useEffect} from "react";
import "./App.css";
import Header from './Components/Header'
import Photo from './Components/Photo'
import PhotoDetails from './Components/PhotoDetails'
import axios from 'axios'


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
  <div className = "App" > 
  
  <Header data = {data}/>
  <Photo data = {data}/>
  <PhotoDetails data = {data}/>
  
  </div>
  );
}

export default App;