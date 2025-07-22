import { useState, useRef } from "react";

type stage_t = 'Pomodoro' | 'Short Break' | 'Long Break';

export function Timer({ stage }: { stage: stage_t }) {
  const [timer, setTimer] = useState(timeSetting[stage]); // time in second
  const [isRunning, setIsRunning] = useState(false);
  const timerIntervalRef = useRef<number>(undefined);

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
      <TimerDisplay timer={timer} />
      <button onClick={handleClick}>
        {isRunning? 'pause' : 'start'}
      </button>
    </>
  )
}

function TimerDisplay({ timer }: { timer: number }) {
  const display = ('0' + Math.floor(timer / 60)).slice(-2) + ':' + ('0' + (timer % 60)).slice(-2);

  return (
    <div className='flex items-center text-8xl font-bold bg-amber-600 text-center size-fit p-8'>
      { display }
    </div>
  )
}

const timeSetting: {[key: string]: number} = {
  Pomodoro: 1500,
  'Short Break': 300,
  'Long Break': 600,
}