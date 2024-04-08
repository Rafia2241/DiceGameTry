import React from 'react'
import dices from './images/dices.png'
import styled from 'styled-components'
import { Button } from './Buttons'
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src={dices} alt="" />
        </div>

        <div className='head'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}> Play Now</Button>
        </div>
        
    </Container>
  );
};

export default StartGame


const Container = styled.div`
display:flex;
max-width:1180px;
height:100vh;
margin: 0 auto;
align-items:center;

.head{
    h1{
    font-size:96px;
    white-space:nowrap
}}

    
`