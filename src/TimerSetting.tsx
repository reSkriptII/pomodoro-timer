type timerSettingProp = { 
  setting: {[key: string]: number}, 
  onChange: Function
}

export function TimerSetting({ setting, onChange }: timerSettingProp) {

  return (
    <div className="text-white">
      <h2 className="text-2xl text-center my-2">Setting</h2>
      {['Pomodoro', 'Short Break', 'Long Break'].map(value => (
        <div key={value} className="flex justify-between w-68 md:w-84 text-xl m-auto">
          <div className="">
            {value}
          </div>
          <div>
            <input 
              type="number" 
              value={Math.round(setting[value] / 60)} 
              className="w-12 mr-2 text-amber-100 text-right"
              onChange={e => onChange(value, +e.target.value * 60 + (setting[value] % 60))}
            />
            :
            <input
              type="number" 
              value={ ('0' + setting[value] % 60).slice(-2)} 
              className="w-12 ml-2 text-amber-100 text-right"
              onChange={e => onChange(value, +e.target.value + Math.floor(setting[value] / 60) * 60 )}
            />
            </div>
        </div>
      ))}
    </div>
  )
}