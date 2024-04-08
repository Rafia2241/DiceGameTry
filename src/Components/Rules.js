import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesCOntainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>
            Select any number <br/>
            Click on dice image  <br/>
            after click on  dice  if selected number is equal to dice number you will get same point as dice  <br/>
            if you get wrong guess then  2 point will be dedcuted 
            </p>
        </div>
    </RulesCOntainer>
  )
}

export default Rules

const RulesCOntainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
background-color: lightblue;
padding: 20px;
border-radius: 10px;
margin-bottom: 20px;
h1{
    font-size: 24px;
}
.text{
    margin-top: 24px;

}

`