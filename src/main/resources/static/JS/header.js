import React from 'react';
import "./header.css";

const Header = (props) => {
    return (
        <div className="header">
        <div className="container">
           <div className="header-inner">
                <div className="header-top">
                 
                    <a href="" className="nav-login">CREATE ACCOUNT</a>
                    <a href="" className="nav-login" style={{marginLeft: "1em"}}>LOGIN</a>
                  
                </div>
                <div className="header-middle">
                    <h1>Memhams</h1>
                </div>
                <div className="header-links">
                    <a href="/auction" className="nav-login active">Auction</a>
                    <a href="" className="nav-login active">Results</a>
                    <a href="/listings" className="nav-login active">Listings</a>
                    <a hreg="" className="nav-login active">About</a>
                </div>
           </div>
        </div>
    </div>
    )
}


export default Header;