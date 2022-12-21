// import { rerenderEntireTree } from './render';
import state from './redux/store'
import store from './redux/redux-store';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost } from "./redux/store";
import { updateNewPostText } from "./redux/store";
import { subscribe } from './redux/store';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App />  
      </StoreContext.Provider>
    </React.StrictMode>
  );
  reportWebVitals();
};



rerenderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
});

