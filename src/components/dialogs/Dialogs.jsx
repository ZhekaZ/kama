import React from 'react';
import s from './dialogs.module.scss'
import Button from "@material-ui/core/Button";

const Dialogs = props => {
    return (
        <div className={s.dialogs}>
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
