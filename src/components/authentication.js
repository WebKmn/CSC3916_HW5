import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from './login';
import Register from './register'
import {logoutUser} from '../actions/authActions';

class Authentication extends Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.showLogin = this.showLogin.bind(this);
        this.showReg = this.showReg.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            toggleReg: false
        }
    }

    componentDidMount() {

    }

    showLogin(){
        this.setState({
            toggleReg: false
        });
    }

    showReg(){
        this.setState({
            toggleReg: true
        });
    }

    logout(){
        const {dispatch} = this.props;
        dispatch(logoutUser());
    }

    render(){
        const userNotLoggedIn = (
            <div>
                <button onClick={this.showLogin}>Login</button><button onClick={this.showReg}>Register</button>
                {this.state.toggleReg ? <Register /> : <Login />}
            </div>
        );

        const userLoggedIn = (
          <div>
              Logged in as: {this.props.username}
              <button onClick={this.logout}>Logout</button>
          </div>
        );
        return(
            <div>
                {this.props.loggedIn ? userLoggedIn : userNotLoggedIn}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        username: state.auth.username
    }
}

export default connect(mapStateToProps)(Authentication);