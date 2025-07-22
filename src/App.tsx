import { useState } from 'react'
import { Timer } from './Timer.tsx'
import { StageSelector } from './StageSelector.tsx';
import { TimerSetting } from './TimerSetting.tsx';

type stage_t = 'Pomodoro' | 'Short Break' | 'Long Break';

export default function App() {
  const [timeSetting, setTimeSetting] = useState(initialTimeSetting)
  const [stage, setStage] = useState<stage_t>('Pomodoro');

  function handleTimeout() {
    console.log('timeout')
    if (stage === 'Pomodoro') {
      setStage('Short Break');
      console.log('podo')
    } else {
      setStage('Pomodoro');
      console.log('break')
    }

    if(Notification.permission === 'granted') {
      new Notification(stage + ' timeout')
      console.log('notified')
    }
  }

  function handleTimeSettingChange(stage: stage_t, value: number) {
    console.log(stage + value)
    setTimeSetting({
      ...timeSetting,
      [stage]: value
    })
  }
  console.log(timeSetting)
  return (
    <div className='bg-slate-900 min-h-screen'>
      <HeaderBar />
      <div className='bg-orange-400 md:px-20 px-4 py-8 mx-auto my-8 w-fit border-x-28 border-x-yellow-400'>
        <Timer key={stage + JSON.stringify(timeSetting)} stage={stage} timeSetting={timeSetting} onTimeout={handleTimeout} />
        <StageSelector stage={stage} onChange={setStage} />
      </div>
      <TimerSetting setting={timeSetting} onChange={handleTimeSettingChange} />
    </div>
  )
}

function HeaderBar() {
  return (
    <header className='flex justify-between max-w-screen-md p-4 text-white md:px-16 m-auto'>
      <div className='flex gap-2 items-center border-b-4 border-red-700 pr-2'>
        <img className='size-8' src='./tomato.svg' />
        <h1>Pomodoro Timer</h1>
      </div>
    </header>
  )
}

const initialTimeSetting: {[key: string]: number} = {
  Pomodoro: 1500,
  'Short Break': 300,
  'Long Break': 600,
}