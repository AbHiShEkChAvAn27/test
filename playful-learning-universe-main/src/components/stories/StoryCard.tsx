
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';

interface StoryCardProps {
  title: string;
  coverImage: string;
  category: string;
  ageRange: string;
  index: number;
}

const StoryCard = ({ title, coverImage, category, ageRange, index }: StoryCardProps) => {
  return (
    <motion.div 
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        className="h-full rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-kid flex flex-col"
        whileHover={{ y: -7, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="relative w-full pt-[65%] overflow-hidden">
          <img 
            src={coverImage} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="kid-badge bg-white/80 backdrop-blur-sm text-kid-blue">
              {category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="kid-badge bg-kid-light-yellow text-kid-blue">
              Ages {ageRange}
            </span>
          </div>
        </div>
        
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
          
          <div className="mt-auto pt-4 flex justify-between items-center">
            <motion.button 
              className="flex items-center text-sm font-medium text-kid-blue"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read Now
            </motion.button>
            
            <motion.button 
              className="w-10 h-10 rounded-full bg-kid-light-blue flex items-center justify-center text-kid-blue"
              whileHover={{ scale: 1.1, backgroundColor: '#4A7CFA', color: '#FFFFFF' }}
              whileTap={{ scale: 0.95 }}
            >
              <Volume2 size={18} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StoryCard;
