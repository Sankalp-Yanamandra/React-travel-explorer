import React from 'react'

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";

import AddDestination from "../pages/AddDestination";

import EditDestination from "../pages/EditDestination";


function AppRoutes() {
 return (
   <Routes>
     <Route
       path="/"
       element={<Home />}
     />

     <Route
       path="/destinations"
       element={<Destinations />}
     />

     <Route
       path="/destinations/:id"
       element={<DestinationDetails />}
     />

      
      <Route
       path="/add-destination"
      element={<AddDestination />}
      />

        <Route
        path="/edit-destination/:id"
        element={<EditDestination />}
        />

   </Routes>
 );
}

export default AppRoutes;
