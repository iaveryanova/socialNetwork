const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
      { id: 1, message: "Hi, how are you?", likesCount: 7 },
      { id: 2, message: "It is my first post", likesCount: 12 },
    ],
    newPostText: "it-kamasutra.com",
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
              };

              return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
              };

        case UPDATE_NEW_POST_TEXT: {
          return {
            ...state,
            newPostText: action.newText
          };
        }
           
        default:
            return state;
    }
}

 export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
  export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT, 
      newText: text
    }
  }

export default profileReducer;