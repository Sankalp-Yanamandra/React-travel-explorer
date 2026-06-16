import React from 'react'

import { Link } from "react-router-dom";

function Navbar() {
    //   complete window reload inside Login(window.location.reload), 
    // since Login and Navbar not related, so on window reload, now Navbar will see the updated Local Storage
    // to check for user
  const user =
    JSON.parse(
      localStorage.getItem("user")
    );



 return (
   <nav>
     <Link to="/">Home</Link>

     <Link to="/destinations">
       Destinations
     </Link>

    {!user && (
            <>
              <Link to="/register">
                Register
              </Link>

              <Link to="/login">
                Login
              </Link>
            </>
          )}

     {user && (
        <Link to="/logout">
          Logout
        </Link>
      )}



   </nav>
 );
}

export default Navbar;
