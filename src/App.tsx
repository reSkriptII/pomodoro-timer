import { useState, useEffect } from 'react'

export default function App() {
  const [timer, setTimer] = useState(1500); // time in second
  const timerDisplay = Math.floor(timer / 60) + ':' + ('0' + (timer % 60)).slice(-2) ;

  function handleClick() {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(t => t - 1);
      } else {
        clearInterval(intervalId);
      }
      
    }, 1000);
  }

  return (
    <>
      <div> {timerDisplay} </div>
      <button onClick={handleClick} />
    </>
    
  )
}

