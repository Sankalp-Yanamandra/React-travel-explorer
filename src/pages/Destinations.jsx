import React from 'react'

import { useEffect, useState } from "react";
import api from "../services/api";
import DestinationCard from "../components/DestinationCard";

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

 return (
   <>
     <h1>Popular Destinations</h1>

     <div className="destinations">
       {destinations.map((destination) => (
         <DestinationCard
           key={destination.id}
           destination={destination}
         />
       ))}
     </div>
   </>
 );
}

export default Destinations;
