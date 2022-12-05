import React from 'react'

const WriteNameForAuth = ({inputHandler, value}: {inputHandler: Function, value: string}) => {
  return (
    <>
        <label className="input-group-text">Enter your</label>
        <input
            required
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => inputHandler(e.target.value)}
            value={value}
            />
        <button type="submit" className="btn btn-secondary">
            Confirm
        </button>
    </>
  )
}

export default WriteNameForAuth