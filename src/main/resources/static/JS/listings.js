import React from 'react';
import {Axios} from 'axios';


class Listings extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listings: []
        }
    }

    async componentDidMount(){
        //load listings here
    }

    render(){
        return (
            <div className="listings-page">
                <h1>Listings</h1>
            </div>
        )
    }
}

export default Listings;