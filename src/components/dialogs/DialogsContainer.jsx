import { connect } from 'react-redux';
import { messageChangeAC, sendMessageAC } from '../../store/reducers/dialogs.reducer';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirectComponent';
import Dialogs from './Dialogs';

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

const AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
