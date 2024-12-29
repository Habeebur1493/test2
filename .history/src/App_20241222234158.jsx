import React from 'react'
import { use } from 'react'

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/home'
    }, 3000)
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