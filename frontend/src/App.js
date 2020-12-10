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

  const stageSubmit = async event => {
    event.preventDefault()
    const updateUser = await window.fetch('http://localhost:5000/user', {
      method: 'POST',
      body: JSON.stringify({
        currentStageName: 'Stage-5',
        fullName: 'vishal Jayapalan'
      })
      // WORKING HERE
    })
    const json = await updateUser.json()
    console.log('UPDated json', json)
    // setUsers(json.users)
    // setLabels(
    //   Object.keys(json).filter(key => key !== '_id' || key !== 'stageName')
    // )
    // setCurrentStage(json.user.currentStage)

    // console.log('inhere')
  }

  return (
    <div className='App'>
      <div className='stageContainer'>
        <div className='formContainer'>
          <div className='titleContainer'>
            <h1 className='title'>{currentStage.stageName}</h1>
          </div>
          <form onSubmit={stageSubmit}>
            {/* <fieldset className='fieldset'> */}
            {/* <legend>Personalia:</legend> */}
            {labels.map(entry => (
              <Entries entry={entry} />
            ))}
            <div className='formRow'>
              <button type='submit'>Submit</button>
            </div>
            {/* </fieldset> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
