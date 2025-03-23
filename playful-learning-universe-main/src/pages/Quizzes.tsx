
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuizCard from '../components/quizzes/QuizCard';

const quizData = [
  {
    id: 1,
    question: "Which of these animals can fly?",
    options: [
      { id: "a", text: "Dog" },
      { id: "b", text: "Cat" },
      { id: "c", text: "Bird" },
      { id: "d", text: "Fish" }
    ],
    correctOptionId: "c",
    category: "Science",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: 2,
    question: "What is 5 + 3?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "8" },
      { id: "c", text: "9" },
      { id: "d", text: "10" }
    ],
    correctOptionId: "b",
    category: "Math"
  },
  {
    id: 3,
    question: "Which of these is a fruit?",
    options: [
      { id: "a", text: "Carrot" },
      { id: "b", text: "Apple" },
      { id: "c", text: "Potato" },
      { id: "d", text: "Broccoli" }
    ],
    correctOptionId: "b",
    category: "Science",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 4,
    question: "How do you spell 'elephant'?",
    options: [
      { id: "a", text: "elefant" },
      { id: "b", text: "ellephant" },
      { id: "c", text: "elephant" },
      { id: "d", text: "eliphant" }
    ],
    correctOptionId: "c",
    category: "Spelling"
  },
  {
    id: 5,
    question: "Which planet is closest to the Sun?",
    options: [
      { id: "a", text: "Earth" },
      { id: "b", text: "Mars" },
      { id: "c", text: "Venus" },
      { id: "d", text: "Mercury" }
    ],
    correctOptionId: "d",
    category: "Science"
  },
  {
    id: 6,
    question: "What is 3 × 4?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "10" },
      { id: "c", text: "12" },
      { id: "d", text: "15" }
    ],
    correctOptionId: "c",
    category: "Math"
  }
];

const Quizzes = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Fun Quizzes</h1>
            <p className="text-gray-600">Test your knowledge with these exciting quizzes!</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quizData.map((quiz, index) => (
              <QuizCard
                key={quiz.id}
                question={quiz.question}
                options={quiz.options}
                correctOptionId={quiz.correctOptionId}
                category={quiz.category}
                imageUrl={quiz.imageUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default Quizzes;
