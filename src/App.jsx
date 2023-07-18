import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg'></div>
    <div className="App">
      <button className='moneyAdd'>Add Money</button><br/>
      <button className='moneyrem'>Check The Balance</button><br/>
      <button className='prevlog'>Check the logs</button><br></br>
      <button className='moneydeduct'>Money Deducted</button><br/>
    </div>
    </>
  )
}

export default App
