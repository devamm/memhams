import React from 'react';
import {Link} from 'react-router-dom';
import "./card.css"

const ListingCard = (props) => {
    return (
        <div className="listings-card">
            <Link to={`/listing${props.listing.id}`} >
                <div className="card-img">
                <img src={props.listing.img} />
                </div>
               
                <h4 className="title">{props.listing.name}</h4>
                <div className="text">
                    <h4 style={{marginBottom: 0}}>{`$${props.listing.price}`}</h4>
                    <h4 style={{marginTop: 0}}>18 Aug 2019</h4>
                </div>

            </Link>
          
        </div>
        
    )
}

export default ListingCard;