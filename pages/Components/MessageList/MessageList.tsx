import React, { useEffect, useRef } from 'react'
import MessageToRender from './MessageToRender'
import {Message} from '../../../src/models'
import {useScrollToBottom} from '../../../src/Util'


const MessageList = ({messages, userName}: {messages: Message[], userName: string} ) => {

  const messageListRef = useRef<HTMLDivElement>(null)
  useScrollToBottom(messageListRef.current);
  
  return (
    <div className="py-4 d-flex flex-column" ref={messageListRef} style={{maxHeight: '75vh', overflow: 'auto'}}>
      {
        messages?.map((message) =>{
          return(
            <MessageToRender key={message.id} sendler={message.user} text={message.text} isByCurrentUser={message.user===userName ? true : false} />
          )
        })
      }
    </div>
  )
}

export default MessageList
