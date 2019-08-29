import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getUserProfile } from '../../store/reducers/profile.reducer';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirectComponent';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile { ...this.props } profile={ this.props.profile }/>
            </div>
        )
    }
}



// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
    }
};

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);
