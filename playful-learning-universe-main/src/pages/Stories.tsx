
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoriesGrid from '../components/stories/StoriesGrid';

const Stories = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Interactive Stories</h1>
            <p className="text-gray-600">Discover magical worlds and adventures tailored just for you!</p>
          </motion.div>
          
          <StoriesGrid />
        </div>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default Stories;
