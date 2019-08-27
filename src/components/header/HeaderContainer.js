import React from 'react';
import Header from './Header';
import * as axios from "axios";
import CONST from "../../CONST";
import { connect } from "react-redux";
import { setAuthUserData } from "../../store/reducers/auth.reducer";
import { toggleIsFetching } from "../../store/reducers/users.reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        axios.get(CONST.BASE_URL + `/auth/me`, {
            withCredentials: true,
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        return (
            <Header { ...this.props } />
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, {
    setAuthUserData,
    toggleIsFetching,
})(HeaderContainer);
