import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ppf from '/Image/ppf.jpg'

function App() {

  return (
    <>
      <div>
        <a href="https://github.com/GJuss?tab=repositories">
          <img src={ppf} alt="" className='logo'/>
        </a>
        <ul>
          <li className='name'>Justin L. Gomez</li>
          <li>Developer at CATC</li>
          <li>January 13, 2004</li>
        </ul>
      </div>
    </>
  )
}

export default App
