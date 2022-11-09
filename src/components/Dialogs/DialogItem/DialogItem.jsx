import React from "react";
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Ffb46d228-aeb2-11ec-8b8c-0207c0fd6104.jpg?crop=2406%2C1604%2C530%2C420" />
        </div>
    )
}

export default DialogItem;