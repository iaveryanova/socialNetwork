
let store = {
  _state: {
    profilePage: {
        postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 7},
        {id: 2, message: 'It is my first post', likesCount: 12}
      ],
        newPostText: 'it-kamasutra.com'

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
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State changed')
  },

  addPost() {
    let newPost = {
      id: 5, 
      message: this._state.profilePage.newPostText, 
      likesCount: 0
    }
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }

}

window.store = store; 


export default store;

// let rerenderEntireTree = () => {
//   console.log('State changed')
// }

// let state = {
//   profilePage: {
//       postsData: [
//       {id: 1, message: 'Hi, how are you?', likesCount: 7},
//       {id: 2, message: 'It is my first post', likesCount: 12}
//     ],
//       newPostText: 'it-kamasutra.com'

//   },
//   dialogsPage: {
//       dialogsData: [
//       {id: 1, name: 'Dimych'},
//       {id: 2, name: 'Andrey'},
//       {id: 3, name: 'Sveta'},
//       {id: 4, name: 'Sasha'},
//       {id: 5, name: 'Victor'},
//       {id: 6, name: 'Valera'},
//   ],
//       messagesData: [
//       {id: 1, message: 'Hi!'},
//       {id: 2, message: 'How are you?'},
//       {id: 3, message: 'I love you'},
//       {id: 4, message: 'Yo'}
//   ]
//   }
// }


// export let addPost = () => {
//   let newPost = {
//     id: 5, 
//     message: state.profilePage.newPostText, 
//     likesCount: 0
//   }
//   state.profilePage.postsData.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }
