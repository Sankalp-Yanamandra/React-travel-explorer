import React from 'react'

import { useEffect, useState } from "react";
import api from "../services/api";
import DestinationCard from "../components/DestinationCard";

import { Link } from "react-router-dom";



function Destinations() {
 const [destinations, setDestinations] =
   useState([]);

    useEffect(() => {
   getDestinations();
 }, []);
 


 async function getDestinations() {
   try {
     const response = await api.get(
       "/destinations"
     );

     setDestinations(response.data);
   } catch (error) {
     console.log(error);
   }
 }


    // delete destination from database as well as "destinations" state
    async function deleteDestination(id) {

    // deleted from database
    await api.delete(
      `/destinations/${id}`
    );

    // deleted from destinations state before sending to re-render Destinations page
    setDestinations(
      destinations.filter(
        destination =>
        destination.id !== id
      )
    );
    }


 return (
   <>
     <h1>Popular Destinations</h1>

      <Link to="/add-destination" className='add-btn'>
      Add Destination
      </Link>


     <div className="destinations">
       {destinations.map((destination) => (
         <DestinationCard
           key={destination.id}
           destination={destination}
           // pass this fn as props to DestinationCard, where using id, this fn gets executed.
           onDelete={deleteDestination}
         />
       ))}
     </div>
   </>
 );
}

export default Destinations;
