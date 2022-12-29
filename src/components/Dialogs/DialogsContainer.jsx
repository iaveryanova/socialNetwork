
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
import { updateNewMessageBodyActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import React from "react";

// const DialogsContainer = (props) => {

//   return <StoreContext.Consumer> 
//     {(store) => {
//       let state = store.getState().dialogsPage;

//       let sendMessages = () => {
//         store.dispatch(sendMessageActionCreator())
//       }
    
//       let onNewMessageChange = (body) => {
//         store.dispatch(updateNewMessageBodyActionCreator(body))
    
//       }
//      return (
//      <Dialogs updateNewMessageBody={onNewMessageChange}
//                       sendMessage={sendMessages}
//                       dialogsPage={state}  />
//      )
//     }
//   }
//   </StoreContext.Consumer>
  
// };

let mapStateToProps = (state) => {
  return {  
      dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageActionCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
