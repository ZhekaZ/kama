import React from 'react';
import { connect } from 'react-redux';
import CONST from '../../CONST';
import { setUserProfile } from '../../store/reducers/profile.reducer';
import Profile from './Profile';
import * as axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(CONST.BASE_URL + `/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <Profile { ...this.props } profile={ this.props.profile }/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
    }
};

export default connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainer);
