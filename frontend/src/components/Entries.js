import React, { useState } from 'react'

export default function Entries ({ entry, updateEntry }) {
  // const [inputEntry, setInputEntry] = useState('')
  let index = 1
  return (
    <div className='formRow'>
      <label>{entry}</label>
      <input
        type='text'
        name={`${entry}`}
        // onChange={e => setInputEntry(e.target.value)}
        // onBlur={updateEntry(inputEntry, entry)}
        onBlur={event => {
          updateEntry(event.target.value, entry)
          event.target.value = ''
        }}
      >
        {/* {inputEntry} */}
      </input>
    </div>
  )
}
