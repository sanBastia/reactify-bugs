import React from 'react'

export class Content extends React.Component {
  render () {
    return (
      <section className='hero is-medium'>
        <div className='hero-body'>
          <h2 className='title'>Add New Bug Report:</h2>
          <form action='' id='bugInputForm'>
            <label className='label' htmlFor=''>
              Description
            </label>
            <p className='control'>
              <input
                className='input'
                type='text'
                id='description'
                placeholder='Describe a bug...' />
            </p>
            <label className='label' htmlFor=''>
              Severity
            </label>
            <p className='control'>
              <span className='select'><select id='severity' name='severity'> <option value='low'> Low </option> <option value='medium'> Medium </option> <option value='high'> High </option> </select></span>
            </p>
            <label className='label' htmlFor=''>
              Assigned To
            </label>
            <p className='control'>
              <input
                className='input'
                type='text'
                id='assignedTo'
                placeholder='Enter responsible...' />
            </p>
            <div className='control is-grouped'>
              <p className='control'>
                <button className='button is-warning'>
                  Submit
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
