import React from "react";
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const DialogItem= (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name="Dimych" id="1"/>
                    <DialogItem name="Andrey" id="2"/>
                    <DialogItem name="Sveta" id="3"/>
                    <DialogItem name="Sasha" id="4"/>
                    <DialogItem name="Victor" id="5"/>
                    <DialogItem name="Valera" id="6"/>
                </div>
                <div className={classes.messages}>
                    <Message message="Hi!"/>
                    <Message message="How are you?"/>
                    <Message message="I love you"/>
                    <Message message="Yo"/>
                </div>
            </div>

    )
}

export default Dialogs;