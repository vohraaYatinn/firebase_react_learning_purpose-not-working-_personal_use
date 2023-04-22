import React from 'react'
import styled from 'styled-components'
import backgroundImage from "../assets/backgroundImg.jpeg"

export default function Background() {
    return (
        <Container>
            <img src={backgroundImage} alt="" />
        </Container>
          )
        }
const Container = styled.div`
position: absolute;

img{
    height: 91vh;
    width: 100vw;;
    position: absolute;
    z-index:-1;
}

`;