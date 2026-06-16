import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    // <tag>anything in btwn is : children </tag>
  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  if (!user) {
    return <Navigate to="/login" replace />;
  }

//   if user found then 
  return children;
}

export default ProtectedRoute;