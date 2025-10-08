import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', marginTop: '50px' }}
    >
      <h1>Home Page</h1>
      <Link to="/login">Go to Login</Link>
    </motion.div>
  );
};

export default Home;
