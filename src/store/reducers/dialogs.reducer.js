import CONST, { randomInt } from '../../CONST';

const dialogsReducer = (state, action) => {
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
