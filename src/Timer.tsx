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

            notify(stage)

            return 0;
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
      <div>
        <button 
          onClick={handleClick} 
          data-active={isRunning}
          className="block text-2xl w-36 shadow-lg shadow-amber-700 py-2 bg-white mx-auto rounded-md data-[active=true]:shadow-none mb-4 active:translate-y-0.5"
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
    <div className='text-5xl sm:text-8xl text-center font-bold bg-amber-600 size-full px-2 py-4 xs:py-8'>
      { display }
    </div>
  )
}

function notify(stage: stage_t) {
  if(Notification.permission === 'granted') {
    new Notification(stage + ' timeout')
    console.log('notified')
  }
}

const timeSetting: {[key: string]: number} = {
  Pomodoro: 1500,
  'Short Break': 3,
  'Long Break': 600,
}