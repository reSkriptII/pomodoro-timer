import { useState, useRef } from 'react'

type stage_t = 'Pomodoro' | 'Short Break' | 'Long Break';

export default function App() {
  const [timer, setTimer] = useState(1500); // time in second
  const [isRunning, setIsRunning] = useState(false);
  const [stage, setStage] = useState<stage_t>('Pomodoro');
  const timerIntervalRef = useRef<number>(undefined);

  function handleStageChange(stage: stage_t) {
    setStage(stage);
    // setTimer()
  }

  function handleClick() {
    let nextIsRunning = !isRunning;
    setIsRunning(nextIsRunning);

    if (nextIsRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimer(t => {
          const nextTimer = t - 1;
          if (nextTimer <= 0) {
            clearInterval(timerIntervalRef.current)
            setIsRunning(false);
          }
          return nextTimer;
        })}, 1000);
    } else {
      clearInterval(timerIntervalRef.current)
    }
  }

  return (
    <>
      <StateSelector stage={stage} onChange={handleStageChange} />
      <TimerDisplay timer={timer} />
      <button onClick={handleClick}> { isRunning? 'pause' : 'start'} </button>
    </>
    
  )
}

function TimerDisplay({ timer }: { timer: number }) {
  const display = Math.floor(timer / 60) + ':' + ('0' + (timer % 60)).slice(-2);

  return (
    <div className='flex items-center text-8xl font-bold bg-amber-600 text-center size-fit p-8'>
      { display }
    </div>
  )
}

function StateSelector({ stage, onChange }: { stage: stage_t, onChange: Function}) {
  return (
    <div>
      {['Pomodoro', 'Short Break', 'Long Break'].map(value => (
        <label 
          className='relative has-checked:bg-amber-300' 
          key={value}
        >
          <input 
            type='radio' 
            className='absolue size-0' 
            name='stage' 
            checked={ stage === value} 
            onChange={() => onChange(value)}
          />
          { value }
        </label>
      ))}
      
    </div>
  )
}