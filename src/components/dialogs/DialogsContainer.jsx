import React from 'react';
import { messageChangeAC, sendMessageAC } from '../../store/reducers/dialogs.reducer';
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
    const state = props.store.getState().dialogsPage;

    const onSendMessage = () => {
        props.store.dispatch(sendMessageAC());
    };

    const onMessageChange = body => {
        props.store.dispatch(messageChangeAC(body));
    };

    return (
        <Dialogs
            dialogsPage={ state }
            sendMessage={onSendMessage}
            updateMessage={onMessageChange}/>
    );
};

export default DialogsContainer;
