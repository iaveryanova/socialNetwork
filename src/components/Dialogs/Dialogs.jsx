import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  let messagesElements = props.state.messagesData.map((el) => (
    <Message message={el.message} />
  ));

  let addTextMessages = () => {
    let text = newMessage.current.value;
        alert(text);
  }

  let newMessage = React.createRef();

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <div>
        <textarea ref={newMessage}></textarea>
        <button onClick={ addTextMessages }>Send Messages</button>
        </div>
    </div>
  );
};

export default Dialogs;
