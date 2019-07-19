import dialogsReducer from './reducers/dialogs.reducer';
import profileReducer from './reducers/profile.reducer';
import sidebarReducer from "./reducers/sidebar.reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 11, message: 'How are you?', likesCount: 5 },
                { id: 12, message: 'hello man', likesCount: 3 },
                { id: 13, message: 'you niggar', likesCount: 2 },
                { id: 14, message: 'go back', likesCount: 4 },
            ],
            newPostText: 'kamasutra',
        },
        dialogsPage: {
            dialogs: [
                { id: 21, name: 'Dimon' },
                { id: 22, name: 'Osvald' },
                { id: 23, name: 'Larik' },
                { id: 24, name: 'Yanka' },
                { id: 25, name: 'Mashka' },
            ],
            messages: [
                { id: 31, message: 'How are you?' },
                { id: 32, message: 'asdffdskfl  sldkf' },
                { id: 33, message: 'gdsfl; ;g lscsdc' },
                { id: 34, message: 'g;fs ;lfd' },
                { id: 35, message: 'dsf ;fgl;megkl;me' },
            ],
            newMessageText: 'kamasutra',
        },
        sidebar: {},
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    dispatch(action) {
        dialogsReducer(this._state.dialogsPage, action);
        profileReducer(this._state.profilePage, action);
        sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

export default store;

window.store = store;
