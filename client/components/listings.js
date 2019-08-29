import React from 'react';
import axios from 'axios';
import ListingCard from './listingCard';
import AddListing from './addListing.js'
import "./listing.css"


class Listings extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listings: [],
            modalOpen: false,
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.reload = this.reload.bind(this);
    }

    toggleModal(e){
        e.preventDefault();
        this.setState({modalOpen: !this.state.modalOpen});
    }

    async reload(){
        try{
            const {data} = await axios.get("/api/listings");
            this.setState({listings: data});
           } catch(e){
               console.log(e);
           }
    }

    async componentDidMount(){
        //load listings here
       try{
        const {data} = await axios.get("/api/listings");
        this.setState({listings: data});
        
       } catch(e){
           console.log(e);
       }
    }

    render(){
        console.log('rendering')
        const listings = this.state.listings;
        console.log(listings);
        return (
           
            <div className="listings-page"
            style={{display: 'flex', justifyContent: 'center'}}>
               <div className="container">
               {this.state.modalOpen == true ? (
                   <AddListing toggleModal={this.toggleModal} reload={this.reload} />
               ) : ""}
                <div className="listing-header">
                    <h2>Listings</h2>
                    <button className="btn success" onClick={this.toggleModal} style={{padding: "3 3"}}
                    disabled={this.state.modalOpen == true}>New Listing</button>
                </div>
               <div style={
                   {display: 'flex', flexDirection: "row", flexWrap: "wrap", marginTop: '2em'}
                }>
                {listings.map(listing => <ListingCard listing={listing} />)}
                </div>
               </div>
            </div>
        )
    }
}

export default Listings;