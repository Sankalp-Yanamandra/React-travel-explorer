import React from 'react'

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";

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
   </Routes>
 );
}

export default AppRoutes;
