type stage_t = 'Pomodoro' | 'Short Break' | 'Long Break';

export function StageSelector({ stage, onChange}: { stage: stage_t, onChange: Function}) {
  return (
     <div className="flex flex-col justify-center text-center gap-4 sm:flex-row">
      {['Pomodoro', 'Short Break', 'Long Break'].map(value => (
        <label 
          className='relative active:translate-y-0.5 has-checked:bg-amber-300 has-focus:border-2 border-black rounded-lg px-4 py-2' 
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