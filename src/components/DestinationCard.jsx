import React from "react";

import { Link } from "react-router-dom";

function DestinationCard({ destination, onDelete }) {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} />

      <h3>{destination.name}</h3>

      <p>{destination.country}</p>

      <p>{destination.category}</p>

      <p>⭐ {destination.rating}</p>

      <div className="card-actions">
        <Link className="view-btn" to={`/destinations/${destination.id}`}>
          View
        </Link>

        <Link className="edit-btn" to={`/edit-destination/${destination.id}`}>
          Edit
        </Link>

        <button className="delete-btn" onClick={() => onDelete(destination.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;
