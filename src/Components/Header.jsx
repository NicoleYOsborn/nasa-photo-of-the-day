import React from 'react'
import styled from 'styled-components'
// import axios from 'axios'

// Style

const HeaderDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`
const Logo = styled.img`
    width: 100px;
`
const Header = props => {

    return (
        <HeaderDiv>
            <Logo alt="NASA Logo" src='../../favicon.ico' />
            <h1 className='heading'>
                    Welcome to NASA Photo of the Day!
            </h1>
            
            <h2>{props.data.title}</h2>
            <p>Date: {props.data.date}</p>
            
        </HeaderDiv>
    )
}
export default Header;