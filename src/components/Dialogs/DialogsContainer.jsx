import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
import { updateNewMessageBodyActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let sendMessages = () => {
    props.store.dispatch(sendMessageActionCreator())
  }

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body))

  }

  // let newMessage = React.createRef();

  return (
  <Dialogs updateNewMessageBody={onNewMessageChange}
          sendMessage={sendMessages}
          dialogsPage={state}  />
  );
};

export default DialogsContainer;
