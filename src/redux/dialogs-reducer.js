const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" },
    ],
    messagesData: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "I love you" },
      { id: 4, message: "Yo" },
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

  let stateCopy = {...state};
  // stateCopy.messagesData = [...state.messagesData]

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
          stateCopy.newMessageBody = action.body;
          return stateCopy;
        }
  
    
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messagesData.push( {id: 5, message: body} );
            return stateCopy;
        }
            
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
      type: SEND_MESSAGE
    }
  }
  
export const updateNewMessageBodyActionCreator = (body) => {
return {
    type: UPDATE_NEW_MESSAGE_BODY, 
    body: body
}
}

export default dialogsReducer;