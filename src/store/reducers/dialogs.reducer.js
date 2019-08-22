import CONST, { randomInt } from '../../CONST';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST.UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newMessageText;
            return state;

        case CONST.SEND_MESSAGE:
            const body = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: randomInt(1000, 100000), message: body});
            return state;

        default:
            return state;
    }
};

export const messageChangeAC = text => ({ type: CONST.UPDATE_NEW_MESSAGE_BODY, newMessageText: text });
export const sendMessageAC = () => ({ type: CONST.SEND_MESSAGE });

export default dialogsReducer;
