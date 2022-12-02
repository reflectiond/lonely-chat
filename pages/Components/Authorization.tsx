import React from 'react'

const Authorization = ({submitHandler, inputHandler, value}: {submitHandler: Function, inputHandler: Function, value: string}) => {
  return (
    <form className="input-group flex-nowrap" onSubmit={(e) => submitHandler(e)}>
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
    </form>
  );
}

export default Authorization