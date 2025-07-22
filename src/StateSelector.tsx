import { useState } from "react";

type stage_t = 'Pomodoro' | 'Short Break' | 'Long Break';

export function StateSelector({ stage, onChange}: { stage: stage_t, onChange: Function}) {
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