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
        this.edited = this.edited.bind(this)
    }

    toggleModal(e){
        e.preventDefault();
        this.setState({modalOpen: !this.state.modalOpen});
    }

    async edited(){
        const {data} = await axios.get(`/api/listings/${this.props.match.params.id}`);
        this.setState({listing: data, loaded: true});
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
       
        const {data} = await axios.get(`/api/listings/${this.props.match.params.id}`);
        this.setState({listing: data, loaded: true});
    }

    render(){
        const listing = this.state.listing;
    
        return (
            <div className="listing-page">
               {this.state.loaded == true ? (
                    <div className="container" >
                    {this.state.modalOpen == true ? (
                          <EditListing toggleModal={this.toggleModal} listing={listing} history={this.props.history} edited={this.edited} />
                      ) : ""}
                      <div className='listing'>
                      
                        <div className="listing-img">
                            <img src={listing.imgurl} />
                        </div>
                        <div className="listing-text">
                            <h2>{listing.name}</h2>
                            <p>{`$${listing.price}`}</p>
                            <br />
                            <button className="btn success" onClick={this.toggleModal}
                            disabled={this.state.modalOpen == true}>Edit Listing</button>
                            <br/>
                            <br/>
                            <button className="btn default" onClick={this.deleteListing}
                            disabled={this.state.modalOpen == true}>Delete Listing</button>
                        </div>
                    </div>
                    <div className="desc">
                        <p>{listing.description}</p>
                    </div>
                      </div>
               ) : ""}
            </div>
        )
    }
}

export default SingleListing;