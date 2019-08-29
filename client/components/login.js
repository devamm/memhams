import React from 'react';
import './login.css'
import {auth} from '../store/users';
import {connect} from 'react-redux'

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleLogin(e){
        e.preventDefault();
       
        //handle login here
        if(this.state.username == 'dev' && this.state.password == 'guest'){
            this.props.login(this.state.username, this.state.password);
        } else {
            console.log('invalid login');
        }
    }

    render(){
        return (
            <div className="login-page" >
                <div classNa    me="container" style={{height: 'calc(100vh - 10em)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="login-form">
                        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={this.handleLogin}>
                            <div className="input-container">
                                <label for="username">Username</label>
                                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/ >
                            </div> 
                            <div className="input-container">
                                <label for="password">Password</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/ > 
                            </div>
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(auth(username, password, 'login'))
    };
}

export default connect(null, mapDispatchToProps)(Login);

