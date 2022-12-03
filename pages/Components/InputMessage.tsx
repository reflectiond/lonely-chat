import React, {useEffect, useState, useRef, useLayoutEffect} from 'react'

function debounceFactory(delay: number = 500){
  let timeout = 0;
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
}
const InputMessage = ({submitMessageHandler, inputMessageHandler, value}: {submitMessageHandler: Function, inputMessageHandler: Function, value: string}) => {

  const resize = useRef<ReturnType<typeof debounceFactory> | null>(null)
  
  useLayoutEffect(()=>{
    resize.current = debounceFactory();
  },[])
  
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
        onKeyDown={(e)=>resize.current?.withDelay(e)}
      />
      <button type="submit" className="btn btn-secondary ">
        Send
      </button>
    </form>
  );
}

export default InputMessage