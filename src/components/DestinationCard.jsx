import React from 'react'

import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
 return (
   <div className="card">
     <img
       src={destination.image}
       alt={destination.name}
     />

     <h3>{destination.name}</h3>

     <p>{destination.country}</p>

     <p>{destination.category}</p>

     <p>⭐ {destination.rating}</p>

     <Link
       to={`/destinations/${destination.id}`}
     >
       View Details
     </Link>
   </div>
 );
}

export default DestinationCard;
