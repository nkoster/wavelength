import React from 'react'
import './App.css'
import WaveLength from './components/WaveLength'
import { StateProvider } from './context/State'

const App = () => {
  return (
    <div className='App'>
      <StateProvider>
        <WaveLength />
      </StateProvider>
    </div>
  )
}

export default App
