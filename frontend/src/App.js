import React, { useState, useEffect } from 'react'
import Entries from './components/Entries'
import CompletionPage from './components/completionPage'

function App () {
  const [users, setUsers] = useState([])
  const [totalStages, setTotalStages] = useState(0)
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [currentStage, setCurrentStage] = useState([])
  const [labels, setLabels] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)

  let entries = {}

  const getUserDetails = async () => {
    const response = await window.fetch('http://localhost:5000/user')
    const json = await response.json()
    console.log('User Details', json)
    if (response.ok) {
      setIsCompleted(json.isCompleted)
      setUsers(json.user)
      setCurrentStageIndex(json.currentStageIndex)
      setTotalStages(json.totalStages)
      console.log('Fields', json.user.currentStage.fields)
      setLabels(json.user.currentStage.fields)
      setCurrentStage(json.user.currentStage)
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [])

  const stageSubmit = async event => {
    // event.preventDefault()
    // console.log('stageName', users.currentStage.stageName)
    const updateUser = await window.fetch('http://localhost:5000/user', {
      method: 'PUT',
      body: JSON.stringify({
        ...entries,
        currentStageName: users.currentStage.stageName
      }),
      // body: JSON.stringify({
      //   currentStageName: users.currentStage.stageName,
      //   fullName: 'vishal Jayapalan'
      // }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await updateUser.json()
    console.log('UPDated json', json)
    setIsCompleted(json.user.isCompleted)
    setUsers(json.user)
    setCurrentStageIndex(json.currentStageIndex)
    setTotalStages(json.totalStages)
    setLabels(json.user.currentStage.fields)
    // setLabels(
    //   Object.keys(json.user.currentStage).filter(
    //     key => key !== '_id' && key !== 'stageName' && key !== '__v'
    //   )
    // )
    setCurrentStage(json.user.currentStage)
  }

  function updateEntry (inputEntry, entry) {
    entries[entry] = inputEntry
  }

  return isCompleted ? (
    <CompletionPage />
  ) : (
    <div className='App'>
      <div className='stageContainer'>
        <div className='formContainer'>
          <div className='titleContainer'>
            <h1 className='title'>{currentStage.stageName}</h1>
            <h1>
              {currentStageIndex}/{totalStages}
            </h1>
          </div>
          <form onSubmit={stageSubmit}>
            {/* <fieldset className='fieldset'> */}
            {/* <legend>Personalia:</legend> */}
            {labels.map(entry => (
              <Entries
                entry={entry}
                updateEntry={updateEntry}
                key={entry._id}
              />
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
