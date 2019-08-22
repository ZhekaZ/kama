import React from 'react';
import { messageChangeAC, sendMessageAC } from '../../store/reducers/dialogs.reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = props => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState().dialogsPage;

                    const onSendMessage = () => {
                        store.dispatch(sendMessageAC());
                    };

                    const onMessageChange = body => {
                        store.dispatch(messageChangeAC(body));
                    };

                    return <Dialogs
                        dialogsPage={ state }
                        sendMessage={ onSendMessage }
                        updateMessage={ onMessageChange }/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
