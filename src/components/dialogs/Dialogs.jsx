import React from 'react';
import s from './dialogs.module.scss'
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
    const url = '/dialogs/' + props.id;

    return (
        <li className={ s.dialogs + ' ' + s.active }>
            <NavLink to={ url }>{ props.name }</NavLink>
        </li>
    );
};
const Message = props => {
    return (
        <li className={ s.dialog }>{ props.message }</li>
    );
};

const Dialogs = props => {

    const messageArea = React.createRef();
    const state = props.dialogsPage;

    const DialogItems = state.dialogs.map(d => <DialogItem name={ d.name } id={ d.id } key={ d.id }/>);
    const MessagesItems = state.messages.map(m => <Message message={ m.message } key={ m.id }/>);
    const messageAreaText = state.newMessageText;

    const onSendMessage = () => {
        props.sendMessage();
    };

    const onMessageChange = e => {
        // const text = messageArea.current.value;
        props.updateMessage(e.target.value);
    };

    return (
        <div className={ s.dialogs }>
            <ul className={ s.dialogsItems }>
                { DialogItems }
            </ul>
            <ul className={ s.messages }>
                { MessagesItems }
            </ul>
            <div className={ s.messages }>
                <textarea
                    ref={ messageArea }
                    value={ messageAreaText }
                    onChange={ onMessageChange }
                    cols="30" rows="10"/>
                <div><Button onClick={ onSendMessage } variant="contained" color="primary">Send</Button></div>
            </div>
        </div>
    );
};

export default Dialogs;
