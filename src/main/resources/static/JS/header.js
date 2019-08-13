import React from 'react';
import "./header.css";
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from './store/users';

const Header = (props) => {
    return (
        <div className="header">
        <div className="container">
           <div className="header-inner">
                <div className="header-top">
                 
                    
                   {!!props.user == false ? ( 
                        <div>
                            <Link to="" className="nav-login">CREATE ACCOUNT</Link>
                            <Link to="/login" className="nav-login" style={{marginLeft: "1em"}}>LOGIN</Link>
                        </div>
                    ) : (
                        <Link to="" className="nav-login" style={{marginLeft: "1em"}}>{props.user.username}</Link>
                   )}
                  
                </div>
                <div className="header-middle">
                    <Link to="/"><h1>Memhams</h1></Link>
                </div>
                <div className="header-links">
                    <Link to="/auction" className="nav-login active">Auction</Link>
                    <Link to="/" className="nav-login active">Results</Link>
                    <Link to="/listings" className="nav-login active">Listings</Link>
                    <Link to="/" className="nav-login active">About</Link>
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