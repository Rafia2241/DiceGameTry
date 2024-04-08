
import styled from 'styled-components'

const RollDice = ({currentdice, rollDice}) => {

    
  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
        <img src={require(`./images/dice_${currentdice}.png`)} alt="dice 1" />

        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
margin-top: 48px;

.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
}
`