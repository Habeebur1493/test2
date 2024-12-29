import React from 'react'
import { use } from 'react'

const App = () => {

  useEffect(() => {
    screenloader();

    function screenloader() {
      const screen = document.querySelector('.screen');
      screen.classList.add('fade-in');

    }
    
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