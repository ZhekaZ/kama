import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CONST from '../../CONST';
import { setUserProfile } from '../../store/reducers/profile.reducer';
import Profile from './Profile';
import * as axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        axios.get(CONST.BASE_URL + `/profile/${userId}`)
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile,
})(WithUrlDataContainerComponent);
