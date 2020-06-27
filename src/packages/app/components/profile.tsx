import * as React from 'react';
import './profile.css';

interface profileInterf {
    profile: {
        name: string,
        picture: string,
        nickname: string
    },

}
class Profile extends React.Component<any, profileInterf> {
    componentWillMount() {
        this.setState({
            profile: {
                name: '',
                picture: '',
                nickname: ''
            }
        });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err: any, profile: any) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }
    render() {
        const { profile } = this.state;
        return (
            <div className="container">
                <div className="profile-area">
                    <h1>{profile.name}</h1>

                </div>
            </div>
        );
    }
}

export default Profile;