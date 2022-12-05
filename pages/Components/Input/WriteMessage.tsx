import React, {useRef} from 'react'
import {useAutosizeTextArea} from '../../Util'

const WriteMessage = ({enterSubmitHandler, inputHandler, value}: {enterSubmitHandler: Function, inputHandler: Function, value: string}) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    useAutosizeTextArea(textAreaRef.current, value);

    return (
    <>
        <textarea
            required
            className="form-control"
            placeholder="Write a message..."
            onChange={(e) => inputHandler(e.target.value)}
            value={value}
            rows={1}
            ref={textAreaRef}
            onKeyDown={(e)=> {e.key==='Enter' ? enterSubmitHandler(e) : false}}
            style={{width:'100%', maxHeight:'85px', resize: 'none'}}
            />
        <button type="submit" className="btn btn-secondary ">
            Send
        </button>
    </>
  )
}

export default WriteMessage