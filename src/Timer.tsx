import { useState, useRef } from "react";

type stage_t = 'Pomodoro' | 'Short Break' | 'Long Break';

type timerProp = { 
  stage: stage_t, 
  timeSetting: {[key:string]: number}, 
  onTimeout: Function,
}

export function Timer({ stage, timeSetting, onTimeout }: timerProp) {
  const [timer, setTimer] = useState(timeSetting[stage]); // time in second
  const timerRef = useRef(timer);
  const [isRunning, setIsRunning] = useState(false);
  const timerIntervalRef = useRef<number>(undefined);

  function handleClick() {
    let nextIsRunning = !isRunning;
    setIsRunning(nextIsRunning);

    if (nextIsRunning) {
      timerIntervalRef.current = setInterval(() => {
        let nextTimer = Math.max(timerRef.current - 1, 0);
        setTimer(nextTimer);
        timerRef.current = nextTimer;

        if (nextTimer === 0) {
          clearInterval(timerIntervalRef.current)
          setIsRunning(false);

          onTimeout();
        }
      }, 1000);
    } else {
      clearInterval(timerIntervalRef.current)
      
    }
  }

  return (
    <>
      <TimerDisplay timer={timer} />
      <div>
        <button 
          onClick={handleClick} 
          data-active={isRunning}
          className="block text-2xl w-36 shadow-amber-700 py-2 bg-white mx-auto rounded-md data-[active=false]:not-active:shadow-md data-[active=false]:-translate-y-0.5 mb-4"
        >
          {isRunning? 'Pause' : 'Start'}
        </button>
      </div>
      
    </>
  )
}

function TimerDisplay({ timer }: { timer: number }) {
  const display = ('0' + Math.floor(timer / 60)).slice(-2) + ':' + ('0' + (timer % 60)).slice(-2);

  return (
    <div className='text-5xl sm:text-8xl text-center font-bold size-full px-2 py-4 xs:py-8'>
      { display }
    </div>
  )
}

