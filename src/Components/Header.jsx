import React  from 'react'
// import axios from 'axios'

const Header = props =>{

    return(
        <div>
            <h1 className = 'heading'>
                Welcome to my NASA Photo of the Day!
            </h1>
            <h2>{props.data.title}</h2>
            <p>Today's Date: {props.data.date}</p>
            
        </div>
    )
}
export default Header;