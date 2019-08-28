import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../../store/reducers/profile.reducer';
import Profile from './Profile';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirectComponent';

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

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
    }
};

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
