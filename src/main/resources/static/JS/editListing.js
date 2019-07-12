import React from 'react';
import axios from 'axios';
import './editListing.css';

class EditListing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: props.name || "",
            price: props.price || "",
            desc: props.desc || "",
            img: props.img || ""
        }

        this.editListing = this.editListing.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async editListing(){

    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div className="listing-modal">
                <button onClick={this.props.toggleModal}>Close</button>
            </div>
        )
    }
}

export default EditListing;