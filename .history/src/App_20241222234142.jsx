import React from 'react'
import { use } from 'react'

const App = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])

  
  
  return (
    <div>
      <div className='screen'>
          <h1>MariLondon</h1>
          <div class="loader"></div>
          <h1>Loading...</h1>
      </div>


      <div>
        <h1>Hello</h1>
      </div>

      
    </div>
  )
}

export default App