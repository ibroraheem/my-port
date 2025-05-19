import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Code, SunMoon } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title text-primary-900 mb-16">About Me</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-5 gap-8 items-center"
        >
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-primary-50">
              <img 
                src="/ibrahim-tesla.jpg" 
                alt="Ibrahim Abdulraheem at Tesla Installation"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-2 mb-2">
                  <span className="inline-block px-3 py-1 bg-primary-900 text-white text-xs rounded-full">Electrical Engineer</span>
                  <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs rounded-full">Developer</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-lg">
              I'm <strong>Ibrahim Abdulraheem</strong>, a Nigerian Electrical and Electronics Engineer, Fullstack Developer, and Energy Systems Specialist. My work spans from <strong>ELV design</strong>, <strong>smart homes</strong>, and <strong>solar installations</strong>, to building <strong>modern web applications</strong> for individuals and businesses.
            </p>

            <p>
              I currently work as an <strong>Associate Engineer at EM-ONE Energy Solutions</strong>, where I contribute to energy infrastructure design and smart systems development. My freelance career includes designing solar systems for homes, building WordPress and React websites, and exploring how <strong>data analytics</strong> can enhance energy decision-making.
            </p>

            <p>
              My goal is to bridge technology and sustainability by making clean energy and smart systems more accessible — starting in Africa.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                <Zap className="text-primary-900" size={24} />
                <span className="font-medium">Electrical Systems</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-accent-50 rounded-lg">
                <Code className="text-accent-500" size={24} />
                <span className="font-medium">Web Development</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-cta-50 rounded-lg">
                <SunMoon className="text-cta-500" size={24} />
                <span className="font-medium">Renewable Energy</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;