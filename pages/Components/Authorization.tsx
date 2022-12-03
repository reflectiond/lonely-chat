import React from 'react'

const Authorization = ({submitNameHandler, inputNameHandler, value}: {submitNameHandler: Function, inputNameHandler: Function, value: string}) => {
  return (
    <form className="input-group flex-nowrap" onSubmit={(e) => submitNameHandler(e)}>
      <label className="input-group-text">Enter your</label>
      <input
        required
        type="text"
        className="form-control"
        placeholder="Username"
        onChange={(e) => inputNameHandler(e.target.value)}
        value={value}
      />
      <button type="submit" className="btn btn-secondary">
        Confirm
      </button>
    </form>
  );
}

export default Authorization