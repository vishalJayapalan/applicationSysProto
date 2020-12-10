import React from 'react'

export default function Entries ({ entry }) {
  let index = 1
  return (
    <div className='entryContainer'>
      <label for={`${entry}`}>{entry}</label>
      <input type='text' name={`${entry}`}></input>
    </div>
  )
}
