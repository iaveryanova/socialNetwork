import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
import { updateNewMessageBodyActionCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  let messagesElements = state.messagesData.map((el) => (
    <Message message={el.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let sendMessages = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
   let body =  e.target.value;
   props.updateNewMessageBody(body);
  }

  // let newMessage = React.createRef();

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <textarea 
                  // ref={newMessage}
                  value = {newMessageBody}
                  onChange = {onNewMessageChange}
        ></textarea>
        <button onClick={ sendMessages }>Send Messages</button>
        </div>
    </div>
  );
};

export default Dialogs;
