import React, { useState } from 'react'

export default function Entries ({ entry, updateEntry }) {
  console.log('Entry', entry)
  // const [inputEntry, setInputEntry] = useState('')
  let index = 1
  return (
    <div className='formRow'>
      <label>
        {entry.fieldName}{' '}
        <span className='requiredStar'>{entry.required ? '*' : ''}</span>
      </label>
      {entry.fieldType === 'input' && (
        <input
          type='text'
          name={`${entry.fieldName}`}
          onChange={e => updateEntry(e.target.value, entry.fieldName)}
        ></input>
      )}
      {entry.fieldType === 'select' && (
        <select onChange={e => updateEntry(e.target.value, entry.fieldName)}>
          {entry.options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      )}
      {entry.fieldType === 'image' && (
        <input
          type='file'
          name={`${entry.fieldName}`}
          onChange={e => updateEntry(e.target.value, entry.fieldName)}
        ></input>
      )}
    </div>
  )
}
