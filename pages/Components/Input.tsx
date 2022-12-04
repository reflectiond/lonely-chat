import React, {useEffect, useState, useRef, useLayoutEffect} from 'react'
import Message from './Message';
import NameForAuth from './NameForAuth';


const Input = ({submitHandler, inputHandler, value, target}: {submitHandler: Function, inputHandler: Function, value: string, target: string}) => {

    return(
        <form className="input-group flex-nowrap" onSubmit={(e) => submitHandler(e)}>
            {
                (()=>{
                    if(target === 'message') {
                        return <Message inputHandler={inputHandler} value={value} />
                    }
                    if(target === 'authorization'){
                        return <NameForAuth inputHandler={inputHandler} value={value} />
                    }
                })()
            }  
        </form> 
    );
}
export default Input