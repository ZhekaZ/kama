import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile.reducer";
import dialogsReducer from "./reducers/dialogs.reducer";
import sidebarReducer from "./reducers/sidebar.reducer";
import usersReducer from "./reducers/users.reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers);
window.store = store;

export default store;
