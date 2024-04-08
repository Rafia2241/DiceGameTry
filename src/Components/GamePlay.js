import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import {Button, OutlineButton} from './Buttons.js'
import Rules from './Rules.js'

const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [slectedNum , setSelectedNum] = useState();
  const [currentdice , setCurrentdice] = useState(1);
  const [error , setError] = useState('')
  const [showrules , setShowRules] = useState(false )

  const generaterandomNumber = (min, max) => {
    return Math.floor(Math.random()
        * (max - min)) + min;
    };
// Math.floor to remove the points in random generation of nmbers

    const rollDice = () =>{
      if(!slectedNum) {
        setError("You have not selected any number")
        return;
      }
      setError("")
    const randomNumber = generaterandomNumber(1,7);
    setCurrentdice((prev) =>randomNumber);

    if(slectedNum === randomNumber) {
      setScore((prev)=>prev + randomNumber);
    }
    else{
      setScore((prev) => prev - 2)
    }

    setSelectedNum(undefined)
}

  const resetScore = () =>{
    setScore(0);
  }
 
  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} slectedNum={slectedNum} setSelectedNum={setSelectedNum}/>
      </div>
      <RollDice currentdice={currentdice} rollDice={rollDice}/>

      <div className='btns'>
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>{setShowRules((prev)=> !prev)}}> {showrules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showrules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay 

const MainContainer = styled.main`
padding-top: 1%;
.topSection{
  display: flex;
  justify-content: space-around;
  align-items: end;
}
.btns{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`