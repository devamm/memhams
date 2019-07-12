import React from 'react';
import "./card.css"

const ListingCard = (props) => {
    return (
        <div className="listings-card">
            <div className="card-img">
               
            </div>
            <h4 className="title">{props.listing.name}</h4>
            <h4>18 Aug 2019</h4>
          
        </div>
        
    )
}

export default ListingCard;