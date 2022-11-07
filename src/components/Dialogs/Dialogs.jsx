import React from "react";
import classes from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I love you'},
        {id: 4, message: 'Yo'}
    ]

    let dialogsElements = dialogsData.map((el) => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = messagesData.map((el) => <Message message={el.message}/>)
return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
                </div>
                <div className={classes.messages}>
                    { messagesElements }
                </div>
            </div>

    )
}

export default Dialogs;