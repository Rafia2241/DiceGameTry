
import { useState } from 'react';
import './App.css';
import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';

function App() {
  const [isGameStarted , setisGameStarted] = useState(false);

  const toggleGamePlay = ()=>{
    setisGameStarted((prev) => !prev); //true hai to false ojae ga false hai to true ojae ga

  }
  return (
    <>
      {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
      
    </>
  );
}

export default App;
