import { connect } from "react-redux";
import { messageChangeAC, sendMessageAC } from '../../store/reducers/dialogs.reducer';
import Dialogs from "./Dialogs";

const mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        updateMessage: body => {
            dispatch(messageChangeAC(body));
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
