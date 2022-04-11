import { useContext, useState } from 'react'
import { ThemeContext } from './App'

const Count = ({ initialCount }) => {
  const [number, setNumber] = useState(0)
  const backgroundColor = useContext(ThemeContext)

  return (
    <div>
      <button
        style={backgroundColor}
        onClick={() => setNumber(prev => prev - 1)}
      >
        -
      </button>
      <span>{number}</span>
      <button
        style={backgroundColor}
        onClick={() => setNumber(prev => prev + 1)}
      >
        +
      </button>
    </div>
  )
}

export default Count
