import * as React from 'react'


const App = () => {
  const [count, setCount] = React.useState(0)
  const handleClick = React.useCallback(() => setCount(count + 1), [count])

  return (
      <div>
        <button onClick={handleClick}> Plus 1 </button>
        <h1>Hello World</h1>
        <h1>{count}</h1>
      </div>
  )
}

export default App
