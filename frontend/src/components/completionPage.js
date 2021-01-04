import React from 'react'

export default function CompletionPage ({ getUserDetails }) {
  const toInitialStage = async () => {
    await window.fetch('http://localhost:5000/user/restart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    getUserDetails()
  }
  return (
    <div className='stageContainer'>
      <h1>You application process is completed</h1>
      <button onClick={toInitialStage}>Restart</button>
    </div>
  )
}
