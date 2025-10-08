import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('auth');
  return isAuthenticated === 'true' ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
