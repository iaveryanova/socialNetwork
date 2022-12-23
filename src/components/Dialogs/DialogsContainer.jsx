import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
import { updateNewMessageBodyActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

  return <StoreContext.Consumer> 
    {(store) => {
      let state = store.getState().dialogsPage;

      let sendMessages = () => {
        store.dispatch(sendMessageActionCreator())
      }
    
      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyActionCreator(body))
    
      }
     return (
     <Dialogs updateNewMessageBody={onNewMessageChange}
                      sendMessage={sendMessages}
                      dialogsPage={state}  />
     )
    }
  }
  </StoreContext.Consumer>
  
};

export default DialogsContainer;
