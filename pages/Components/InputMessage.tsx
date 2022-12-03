import React from 'react'

const InputMessage = ({submitMessageHandler, inputMessageHandler, value}: {submitMessageHandler: Function, inputMessageHandler: Function, value: string}) => {

  // function delay(fn: Function, ms: string) {
  //   let timer = 0
  //   return function(...args) {
  //     clearTimeout(timer)
  //     timer = setTimeout(fn.bind(this, ...args), 30)
  //   }
  // }
  const resize = (() => {
    let delay = 500;
    let timeout = 0;
    //delay not working 
    return {
      withDelay(e: React.KeyboardEvent<HTMLTextAreaElement>){
        console.log(timeout, 'before clearing')
        if (timeout){
          clearTimeout(timeout)
          console.log(timeout, 'after clearing')
        }
        timeout = window.setTimeout(()=>console.log("resize func fired"), delay)
      }
    }
  })();
  
  return (
    <form className="input-group flex-nowrap" onSubmit={(e) => submitMessageHandler(e)}>
      <textarea
        required
        className="form-control"
        placeholder="Write a message..."
        onChange={(e) => inputMessageHandler(e.target.value)}
        value={value}
        rows={1}
        style={{width:'100%', resize:'none'}}
        onKeyDown={(e)=>resize.withDelay(e)}
      />
      <button type="submit" className="btn btn-secondary ">
        Send
      </button>
    </form>
  );
}

export default InputMessage