import React from 'react';
import axios from 'axios';
import './singleListing.css';
import EditListing from './editListing';

class SingleListing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listing: {},
            loaded: false,
            modalOpen: false
        }

        this.deleteListing = this.deleteListing.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(e){
        e.preventDefault();
        this.setState({modalOpen: !this.state.modalOpen});
    }

    async deleteListing(e){
        e.preventDefault();
        try{
            await axios.delete(`/api/listings/${this.state.listing.id}`);
            this.props.history.push(`/listings`);
        } catch(err){
            console.log(err);
        }
    }

    async componentDidMount(){
        console.log(this.props)
        const {data} = await axios.get(`/api/listings/${this.props.match.params.id}`);
        this.setState({listing: data, loaded: true});
    }

    render(){
        const listing = this.state.listing;
        console.log(this.state.modalOpen);
        return (
            <div className="listing-page">
               {this.state.loaded == true ? (
                    <div className="container" >
                    {this.state.modalOpen == true ? (
                          <EditListing toggleModal={this.toggleModal} />
                      ) : ""}
                      <div className='listing'>
                      
                        <div className="listing-img">
                            <img src={listing.img} />
                        </div>
                        <div className="listing-text">
                            <h2>{listing.name}</h2>
                            <p>{`$${listing.price}`}</p>
                            <br />
                            <button className="btn success" onClick={this.toggleModal}
                            disabled={this.state.modalOpen == true}>Edit Listing</button>
                            <br/>
                            <br/>
                            <button className="btn default" onClick={this.deleteListing}>Delete Listing</button>
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