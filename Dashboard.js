import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', marginTop: '50px' }}
    >
      <h1>Dashboard (Protected)</h1>
      <button
        onClick={handleLogout}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Logout
      </button>
    </motion.div>
  );
};

export default Dashboard;
