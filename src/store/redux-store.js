import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile.reducer";
import dialogsReducer from "./reducers/dialogs.reducer";
import sidebarReducer from "./reducers/sidebar.reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;
window.store = store;
