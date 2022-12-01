import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer"

let reducers = combineReducers({
    profilePage:profileReducer, 
    dialogsPage:dialogsReducer
})

let store = createStore(reducers);

export default store;

//store от redux
// import {configureStore} from "@reduxjs/toolkit";
// import DialogsReducer from "./Reducer/DialogsReducer";
// import ProfileReducer from "./Reducer/ProfileReducer";
// import SidBarReducer from "./Reducer/SidBarReducer";

//Обратите внимание, что это работает только для одного уровня вложенности.
// Если требуются вложенные редукторы, придется вызывать combineReducers() самостоятельно.

// let store = configureStore({
//     reducer:{
//         dialogsPage:DialogsReducer,
//         profilePage:ProfileReducer,
//         sidBarPage:SidBarReducer,
//     }
// })

// export default store


