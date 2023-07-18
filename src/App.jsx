import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/>  */}
    <div className="App">
      <button className='btn-three'>Add Money</button><br/>
      <button className='btn-three'>Money Deduction</button><br/>
      <button className='btn-three'>Check The Balance</button><br/>
      <button className='btn-three'>Check the logs</button><br></br>
    </div>
    </>
  )
}

export default App
