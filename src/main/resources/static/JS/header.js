import React from 'react';
import "./header.css";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from './store/users';

const Header = (props) => {
    console.log("user logged in: ", !!props.user);
    return (
        <div className="header">
        <div className="container">
           <div className="header-inner">
                <div className="header-top">
                 
                    
                   {!!props.user == false ? ( 
                        <div>
                            <a href="" className="nav-login">CREATE ACCOUNT</a>
                            <a href="/login" className="nav-login" style={{marginLeft: "1em"}}>LOGIN</a>
                        </div>
                    ) : (
                        <a href="/" className="nav-login" style={{marginLeft: "1em"}} disabled>{props.user.username}</a>
                   )}
                  
                </div>
                <div className="header-middle">
                    <a href="/"><h1>Memhams</h1></a>
                </div>
                <div className="header-links">
                    <a href="/auction" className="nav-login active">Auction</a>
                    <a href="/" className="nav-login active">Results</a>
                    <a href="/listings" className="nav-login active">Listings</a>
                    <a href="/" className="nav-login active">About</a>
                </div>
           </div>
        </div>
    </div>
    )
}

const mapState = state => {
    return {user: Object.keys(state.user).length != 0 ? state.user : undefined}
}

const mapDispatch = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}


export default withRouter(connect(mapState, mapDispatch)(Header));