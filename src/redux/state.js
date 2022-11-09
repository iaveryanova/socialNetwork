
import { rerenderEntireTree } from '../render';


  let state = {
    profilePage: {
        postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 7},
        {id: 2, message: 'It is my first post', likesCount: 12}
    ]
    },
    dialogsPage: {
        dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ],
        messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I love you'},
        {id: 4, message: 'Yo'}
    ]
    }
  }

  export let addPost = (postMessage) => {
    let newPost = {
      id: 5, 
      message: postMessage, 
      likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
  }
 
  export default state;