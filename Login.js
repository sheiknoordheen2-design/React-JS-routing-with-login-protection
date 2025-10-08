import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    navigate('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', marginTop: '50px' }}
    >
      <h1>Login Page</h1>
      <button
        onClick={handleLogin}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Login
      </button>
    </motion.div>
  );
};

export default Login;
