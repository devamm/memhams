import React from 'react';
import "./card.css"

const ListingCard = (props) => {
    return (
        <div className="listings-card">
            <a href={`/listing${props.listing.id}`} >
                <div className="card-img">
                <img src={props.listing.img} />
                </div>
               
                <h4 className="title">{props.listing.name}</h4>
                <div className="text">
                    <h4 style={{marginBottom: 0}}>{`US $${props.listing.price}`}</h4>
                    <h4 style={{marginTop: 0}}>18 Aug 2019</h4>
                </div>

            </a>
          
        </div>
        
    )
}

export default ListingCard;