import React, { useState, useEffect } from 'react'
import Entries from './components/Entries'

function App () {
  const [users, setUsers] = useState([])
  const [currentStage, setCurrentStage] = useState([])
  const [labels, setLabels] = useState([])

  const getUserDetails = async () => {
    const response = await window.fetch('http://localhost:5000/user')
    const json = await response.json()
    console.log(json)
    if (response.ok) {
      setUsers(json.user)
      setLabels(
        Object.keys(json).filter(key => key !== '_id' || key !== 'stageName')
      )
      setCurrentStage(json.user.currentStage)
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [])

  return (
    <div className='App'>
      <div className='stageContainer'>
        <form>
          <fieldset className='fieldset'>
            {labels.map(entry => (
              <Entries entry={entry} />
            ))}
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default App
