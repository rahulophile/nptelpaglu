// src/pages/HomePage.tsx

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';

const HomePage = () => {
  const navigate = useNavigate();

  // Jab user kisi subject card par click karega
  const handleSubjectClick = (subjectId: string) => {
    console.log(`Navigating to ${subjectId} quiz...`);
    navigate(`/quiz/${subjectId}`);
  };

  // Animation ke liye container variants
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.15,
  //     },
  //   },
  // };

  return (
    <div className="min-h-screen flex flex-col bg-brand-background">
      {/* Home page par Header ko koi props nahi chahiye */}
      

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        
        {/* Introductory Section */}
        <motion.section
          className="text-center mb-16"
          
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-brand-dark-text">
            NPTEL Quiz Practice
          </h1>
          <p className="text-lg text-brand-light-text max-w-2xl mx-auto">
            Select a subject below to start practicing with week-wise questions and improve your scores.
          </p>
        </motion.section>

        {/* List of Subjects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
          
        >
          {/* Subject 1 */}
          <Card
            title="CS113: Software Testing"
            description="Start Quiz"
            onClick={() => handleSubjectClick('cs113')}
          />

          {/* Subject 2 */}
          <Card
            title="CS142: Ethical Hacking"
            description="Start Quiz"
            onClick={() => handleSubjectClick('cs142')}
          />
          
          <div>
            <h1 className='mt-2 text-red-900 text-center'><b>More cooming soon..</b></h1>
          </div>
          
        </motion.div>
        
        
      </main>
      <Footer/>

      
    </div>
  );
};

export default HomePage;