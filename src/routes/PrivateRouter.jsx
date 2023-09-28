import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children })=>{
  const user = true;
  const location = useLocation();
  if (user) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRouter;