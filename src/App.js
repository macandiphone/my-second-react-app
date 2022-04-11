import React, { useState } from 'react'
import Count from './Count'

import './App.css'

export const ThemeContext = React.createContext(undefined)

const App = () => {
  const [theme, setTheme] = useState('red')

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Count initialCount={0} />
      <button
        onClick={() =>
          setTheme(prevTheme => {
            return prevTheme === 'red' ? 'blue' : 'red'
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  )
}

export default App
