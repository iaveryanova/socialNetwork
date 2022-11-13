// import { rerenderEntireTree } from './render';
import state from './redux/state'

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost } from "./redux/state";
import { updateNewPostText } from "./redux/state";
import { subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>
  );
  reportWebVitals();
};



rerenderEntireTree(state);

subscribe(rerenderEntireTree);

