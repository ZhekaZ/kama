import React from 'react';
import s from './dialogs.module.scss'
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
    const url = '/dialogs/' + props.id;

    return(
        <li className={s.dialogs + ' ' + s.active}>
            <NavLink to={url}>{props.name}</NavLink>
        </li>
    );
};
const Message = props => {
    return (
        <li className={s.dialog}>{props.message}</li>
    );
};

const dialogsData = [
    {id: 1, name: 'Dimon'},
    {id: 1, name: 'Osvald'},
    {id: 1, name: 'Larik'},
    {id: 1, name: 'Yanka'},
    {id: 1, name: 'Mashka'},
];

const msgsData = [
    {id: 1, name: 'How are you?'},
    {id: 1, name: 'asdffdskfl  sldkf'},
    {id: 1, name: 'gdsfl; ;g lscsdc'},
    {id: 1, name: 'g;fs ;lfd'},
    {id: 1, name: 'dsf ;fgl;megkl;me'},
];

const Dialogs = props => {
    // const DialogItems = dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    // const MessagesItems = msgsData.map(m => <Message message={m.message} key={m.id} />);

    return (
        <div className={s.dialogs}>
            DialogItems
            <DialogItem name='Dimych' id='1' />
            <DialogItem name='Dimych' id='2' />
            <DialogItem name='Dimych' id='3' />
            <ul className={s.dialogsItems}>
                {/*{DialogItems}*/}
                DialogItems
            </ul>
            <ul className={s.messages}>
                {/*{MessagesItems}*/}
                MessagesItems
            </ul>
            <div className={s.messages}>
                <textarea cols="30" rows="10" />
                <div><Button variant="contained" color="primary">Send</Button></div>
            </div>
        </div>
    );
};

export default Dialogs;
