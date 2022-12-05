import React, {useEffect, useState, useRef, useLayoutEffect} from 'react'
import WriteMessage from './WriteMessage';
import WriteNameForAuth from './WriteNameForAuth';


const Input = ({submitHandler, inputHandler, value, target}: {submitHandler: Function, inputHandler: Function, value: string, target: string}) => {

    return(
        <form className="input-group flex-nowrap" onSubmit={(e) => submitHandler(e)}>
            {
                (()=>{
                    if(target === 'message') {
                        return <WriteMessage inputHandler={inputHandler} value={value} enterSubmitHandler={submitHandler}/>
                    }
                    if(target === 'authorization'){
                        return <WriteNameForAuth inputHandler={inputHandler} value={value} />
                    }
                })()
            }  
        </form> 
    );
}
export default Input