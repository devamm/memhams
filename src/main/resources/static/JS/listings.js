import React from 'react';
import axios from 'axios';
import ListingCard from './listingCard';
import "./listing.css"


class Listings extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listings: []
        }
    }

    async componentDidMount(){
        //load listings here
       try{
        const {data} = await axios.get("/api/listings");
        console.log('called listings')
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
               <h2>Listings</h2>
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