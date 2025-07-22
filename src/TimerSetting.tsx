type timerSettingProp = { 
  setting: {[key: string]: number}, 
  onChange: Function
}

export function TimerSetting({ setting, onChange }: timerSettingProp) {

  return (
    <div className="text-white">
      {['Pomodoro', 'Short Break', 'Long Break'].map(value => (
        <div key={value}>
          {value}
          <input 
            type="number" 
            value={Math.round(setting[value] / 60)} 
            onChange={e => onChange(value, +e.target.value * 60 + (setting[value] % 60))}
          />
          <input
            type="number" 
            value={setting[value] % 60} 
            onChange={e => onChange(value, +e.target.value + Math.floor(setting[value] / 60) * 100 )}
          />
        </div>
      ))}
    </div>
  )
}