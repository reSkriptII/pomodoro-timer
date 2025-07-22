import { useState, useRef } from 'react'

export default function App() {
  const [timer, setTimer] = useState(1500); // time in second
  const [isRunning, setIsRunning] = useState(false);
  const timerInterval = useRef<number>(undefined);

  function handleClick() {
    let nextIsRunning = !isRunning;
    setIsRunning(nextIsRunning);

    if (nextIsRunning) {
      timerInterval.current = setInterval(() => {
        if (timer > 0) {
          setTimer(t => t - 1);
        } else {
          clearInterval(timerInterval.current);
        }
      }, 1000);
    } else {
      clearInterval(timerInterval.current)
    }
    
  }

  return (
    <>
      <TimerDisplay timer={timer} />
      <button onClick={handleClick}> { isRunning? 'stop' : 'pause'} </button>
    </>
    
  )
}

function TimerDisplay({ timer }: { timer: number }) {
  const display = Math.floor(timer / 60) + ':' + ('0' + (timer % 60)).slice(-2);

  return <div>
    { display }
  </div>
}