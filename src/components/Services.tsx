import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../data';
import { 
  Lightbulb, 
  Code,
  Home, 
  BarChart, 
  Gauge, 
  Cctv, 
  Sun 
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Map icon strings to actual Lucide React components
  const getIcon = (iconName: string) => {
    const iconProps = { size: 48, className: 'text-primary-900 mb-4' };
    
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb {...iconProps} />;
      case 'Home': return <Home {...iconProps} />;
      case 'BarChart': return <BarChart {...iconProps} />;
      case 'Gauge': return <Gauge {...iconProps} />;
      case 'Cctv': return <Cctv {...iconProps} />;
      case 'Sun': return <Sun {...iconProps} />;
      case 'Code': return <Code {...iconProps} />;
      default: return <Lightbulb {...iconProps} />;
    }
  };

  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container">
        <h2 className="section-title text-primary-900 mb-16">Services I Offer</h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="card hover:translate-y-[-5px] hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                {getIcon(service.icon)}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;