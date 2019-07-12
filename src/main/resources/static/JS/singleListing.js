import React from 'react';
import axios from 'axios';
import './singleListing.css';

class SingleListing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listing: {},
            loaded: false
        }
    }

    async componentDidMount(){
        console.log(this.props.match)
        const {data} = await axios.get(`/api/listings/${this.props.match.params.id}`);
        this.setState({listing: data, loaded: true});
    }

    render(){
        const listing = this.state.listing;
        return (
            <div className="listing-page">
               {this.state.loaded == true ? (
                    <div className="container" >
                      <div className='listing'>
                        <div className="listing-img">
                            <img src={listing.img} />
                        </div>
                        <div className="listing-text">
                            <h2>{listing.name}</h2>
                            <p>{`$${listing.price}`}</p>
                            <br />
                            <button>Edit Listing</button>
                            <button>Delete Listing</button>
                        </div>
                    </div>
                    <div className="desc">
                        <p>{listing.desc}</p>
                    </div>
                      </div>
               ) : ""}
            </div>
        )
    }
}

export default SingleListing;