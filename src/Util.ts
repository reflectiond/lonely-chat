import { useEffect } from "react";

const useAutosizeTextArea = (
    textAreaRef: HTMLTextAreaElement | null,
    value: string
  ) => {
    useEffect(() => {
      if (textAreaRef) {
        textAreaRef.style.height = "0px";
        const scrollHeight = textAreaRef.scrollHeight;
        textAreaRef.style.height  = scrollHeight + "px";
        textAreaRef.style.overflow = 'hidden';
        if (textAreaRef.style.overflow === 'hidden' && parseInt(textAreaRef.style.height, 10) > parseInt(textAreaRef.style.maxHeight, 10)){
            textAreaRef.style.overflow = 'auto';
        }
      }
    }, [textAreaRef, value]);
  };
const useScrollToBottom = (messageListRef: HTMLDivElement | null) => {
  useEffect(() => {
    if (messageListRef) {
      let lastMessage = messageListRef.lastElementChild
      if(lastMessage){
        lastMessage.scrollIntoView({block: "start", behavior: "smooth"});
      }
    }
  });
};

export {useAutosizeTextArea, useScrollToBottom}

