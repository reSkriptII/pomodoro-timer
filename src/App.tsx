import { useState, useRef } from 'react'
import { Timer } from './Timer.tsx'
import { StateSelector } from './StateSelector.tsx';

type stage_t = 'Pomodoro' | 'Short Break' | 'Long Break';

export default function App() {
  const [stage, setStage] = useState<stage_t>('Pomodoro');
  
  return (
    <>
      <StateSelector stage={stage} onChange={setStage} />
      <div>
        <Timer key={stage} stage={stage} />
      </div>
      
    </>
  )
}