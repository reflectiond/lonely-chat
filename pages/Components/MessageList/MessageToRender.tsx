import React from 'react'

const MessageToRender = ({sendler, text, isByCurrentUser}: {sendler: string,text: string, isByCurrentUser: boolean}) => {
  const classes = ['d-flex', 'flex-column', 'flex-wrap', 'my-2', isByCurrentUser ? "align-items-end" : "align-items-start"].join(" ");
  const bgColor = isByCurrentUser ? '#20c997' : '#6f42c1';
  const textColor = isByCurrentUser ? '#383838' : '#FFCA45';
 
  //Need something to avoid horizontal overflow when one-worded, 100500 char shit typed while on small devices
  return (
    <div className={classes}>
      <div style={{backgroundColor: bgColor, borderRadius: '20px', width: 'fit-content'}}>
        <div className='px-3 pt-2 h5' style={{color: textColor}}>{sendler}</div>
        <div className='px-3 pb-2' style={{color: textColor,height: 'auto'}}>{text}</div>
      </div>
    </div>
  )
}

export default MessageToRender
