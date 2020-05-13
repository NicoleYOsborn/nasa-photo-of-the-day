import React from "react";

const Photo = props =>{

    return(
        <img 
          src={props.data.url}
          alt={props.data.title}
        />
        
    )
}
export default Photo;