
import styled from 'styled-components'
const NumberSelector = ({ error ,setError, slectedNum , setSelectedNum}) => {

    const arrayNum = [1,2,3,4,5,6];
    
    const numberSelectHandler =(value)=>{
        setSelectedNum(value)
        setError("")
    }
  return (
    <NumbSelectorContainer>
    <p className='err'>{error}</p>
    <div className='flex'>
        {/* to use javascript we will use {} below */}
        {arrayNum.map((value,i)=>(
            <Box
            isselected={value == slectedNum}
            key={i} onClick={()=>numberSelectHandler(value)}>
                {/* using callback function in onclick cause we need to pass/return a value */}
                {value}
            </Box>
        ))}
    </div>
    <p>Select Number</p>
    </NumbSelectorContainer>
  )
}
export default NumberSelector


const NumbSelectorContainer = styled.div `

display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 500;
}
.err{
color: red;
}
`
const Box = styled.div`

    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isselected ? "black" : "white")};
    color: ${(props) => (!props.isselected ? "black" : "white")};

`